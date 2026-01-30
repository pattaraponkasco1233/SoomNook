import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

interface FaqItem {
    id: number;
    question: string;
    answer: string;
}

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
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
export class FaqComponent {
    readonly openId = signal<number | null>(1);

    readonly faqs: FaqItem[] = [
        {
            id: 1,
            question: 'แต่งตัวธีมอะไรดี?',
            answer: 'พาสเทล เอิร์ธโทน หรือชุดที่ใส่แล้วมั่นใจสุดๆ ได้เลย'
        },
        {
            id: 2,
            question: 'พาเพื่อน/แฟนมาด้วยได้ไหม?',
            answer: 'ได้เลย! แต่ช่วยระบุจำนวนคนในฟอร์ม RSVP ให้หน่อยนะ'
        },
        {
            id: 3,
            question: 'มีที่จอดรถไหม?',
            answer: 'มีที่จอดรถเพียงพอ และมีรถรับส่งจาก BTS อารีย์ด้วย'
        }
    ];

    toggle(itemId: number): void {
        this.openId.update((current) => (current === itemId ? null : itemId));
    }
}
