import { ChangeDetectionStrategy,Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';


@Component({
  selector: 'app-word-cards',
  standalone: true,
  imports: [CardComponent,DynamicLoaderComponent],
  templateUrl: './word-cards.component.html',
  styleUrl: './word-cards.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCardsComponent {
}
