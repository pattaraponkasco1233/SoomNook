import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';

@Component({
    selector: 'app-music-toggle',
    templateUrl: './music-toggle.component.html',
    styleUrl: './music-toggle.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'music-toggle'
    }
})
export class MusicToggleComponent {
    private readonly destroyRef = inject(DestroyRef);
    private readonly audioContext = signal<AudioContext | null>(null);
    private readonly oscillator = signal<OscillatorNode | null>(null);
    private readonly gainNode = signal<GainNode | null>(null);
    readonly isPlaying = computed(() => !!this.audioContext());

    constructor() {
        this.destroyRef.onDestroy(() => this.stop());
    }

    toggle(): void {
        if (this.isPlaying()) {
            this.stop();
        } else {
            this.start();
        }
    }

    private start(): void {
        const context = new AudioContext();
        const gain = context.createGain();
        gain.gain.value = 0.025;

        const oscillator = context.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.value = 432;

        oscillator.connect(gain);
        gain.connect(context.destination);

        oscillator.start();

        this.audioContext.set(context);
        this.gainNode.set(gain);
        this.oscillator.set(oscillator);
    }

    private stop(): void {
        const oscillator = this.oscillator();
        if (oscillator) {
            oscillator.stop();
            oscillator.disconnect();
        }

        const gain = this.gainNode();
        if (gain) {
            gain.disconnect();
        }

        const context = this.audioContext();
        if (context) {
            context.close();
        }

        this.audioContext.set(null);
        this.gainNode.set(null);
        this.oscillator.set(null);
    }
}
