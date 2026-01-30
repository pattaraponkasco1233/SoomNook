import { ChangeDetectionStrategy, Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-story',
    templateUrl: './story.component.html',
    styleUrl: './story.component.scss',
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
export class StoryComponent { }
