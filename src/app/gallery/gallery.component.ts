import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface GalleryItem {
    src: string;
    alt: string;
}

@Component({
    selector: 'app-gallery',
    imports: [NgOptimizedImage],
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
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
export class GalleryComponent {
    readonly items: GalleryItem[] = [
        { src: 'gallery-1.svg', alt: 'โมเมนต์ริมทะเล' },
        { src: 'gallery-2.svg', alt: 'รอยยิ้มบนรถไฟ' },
        { src: 'gallery-3.svg', alt: 'วันปิคนิค' },
        { src: 'gallery-4.svg', alt: 'แสงเย็นยามเย็น' }
    ];
}
