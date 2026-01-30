import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CountdownComponent } from '../shared/countdown.component';

@Component({
    selector: 'app-home',
    imports: [CountdownComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(12px)' }),
                animate('600ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ])
    ]
})
export class HomeComponent {
    readonly weddingDate = new Date('2026-11-21T17:00:00+07:00');
}
