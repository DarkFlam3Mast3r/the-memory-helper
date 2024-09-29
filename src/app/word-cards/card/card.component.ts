import { Component,Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatChipsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() frontTitle: string = '123';
  @Input() frontContent: string = '456aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasss';
  @Input() backTitle: string = 'aaa';
  @Input() backContent: string = 'bbb';

  isFlipped: boolean = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}
