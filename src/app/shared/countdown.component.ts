import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';

@Component({
    selector: 'app-countdown',
    templateUrl: './countdown.component.html',
    styleUrl: './countdown.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent {
    readonly targetDate = input.required<Date>();

    private readonly now = signal(new Date());
    private readonly destroyRef = inject(DestroyRef);

    readonly remaining = computed(() => {
        const diff = this.targetDate().getTime() - this.now().getTime();
        const totalSeconds = Math.max(0, Math.floor(diff / 1000));
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    });

    constructor() {
        const timerId = setInterval(() => this.now.set(new Date()), 1000);
        this.destroyRef.onDestroy(() => clearInterval(timerId));
    }
}
