import { computed, Injectable, signal } from '@angular/core';
import { RsvpEntry } from '../models/rsvp.model';

@Injectable({ providedIn: 'root' })
export class RsvpService {
    private readonly rsvps = signal<RsvpEntry[]>([]);
    readonly totalRsvps = computed(() => this.rsvps().length);

    async submit(entry: Omit<RsvpEntry, 'submittedAt'>): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 600));
        this.rsvps.update((items) => [
            ...items,
            {
                ...entry,
                submittedAt: new Date()
            }
        ]);
    }
}
