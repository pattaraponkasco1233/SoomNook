import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DetailsComponent } from './details/details.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MusicToggleComponent } from './shared/music-toggle.component';
import { StoryComponent } from './story/story.component';

@Component({
  selector: 'app-root',
  imports: [
    HomeComponent,
    StoryComponent,
    DetailsComponent,
    GalleryComponent,
    FaqComponent,
    FooterComponent,
    MusicToggleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
}
