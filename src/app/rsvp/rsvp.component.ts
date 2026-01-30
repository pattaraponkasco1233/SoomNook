import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { AttendanceOption } from '../models/rsvp.model';
import { RsvpService } from '../services/rsvp.service';

@Component({
    selector: 'app-rsvp',
    imports: [ReactiveFormsModule],
    templateUrl: './rsvp.component.html',
    styleUrl: './rsvp.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(12px)' }),
                animate('600ms 120ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ],
    host: {
        class: 'section-card',
        '[@fadeUp]': 'true'
    }
})
export class RsvpComponent {
    private readonly fb = inject(FormBuilder);
    private readonly rsvpService = inject(RsvpService);

    readonly status = signal<'idle' | 'saving' | 'success' | 'error'>('idle');
    readonly totalRsvps = computed(() => this.rsvpService.totalRsvps());

    readonly form = this.fb.nonNullable.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        guests: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
        attendance: ['yes' as AttendanceOption, [Validators.required]],
        message: ['']
    });

    async submit(): Promise<void> {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.status.set('saving');

        try {
            await this.rsvpService.submit(this.form.getRawValue());
            this.status.set('success');
            this.form.reset({
                name: '',
                phone: '',
                guests: 1,
                attendance: 'yes',
                message: ''
            });
        } catch {
            this.status.set('error');
        }
    }
}
