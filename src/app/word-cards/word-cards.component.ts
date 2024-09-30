import { ChangeDetectionStrategy,Component, model,inject, OnInit, signal } from '@angular/core';
import { CardComponent } from './card/card.component';
import { DynamicLoaderComponent } from './dynamic-loader/dynamic-loader.component';
import { cardMgrService } from '../services/cardMgr.service';
import { Subscription } from 'rxjs';
import { Card } from '../interface/card.interface';
import { cloneDeep } from 'lodash';
import { CardColorDirective } from '../directives/card-color.directive';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface DialogData{
  wordName:string;
  wordContent:string;
  wordExplanation:string
}



@Component({
  selector: 'app-word-cards',
  standalone: true,
  imports: [CardComponent,MatDialogModule,DynamicLoaderComponent,CardColorDirective,MatButtonModule],
  templateUrl: './word-cards.component.html',
  styleUrl: './word-cards.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordCardsComponent implements OnInit {
  wordName:string = ''
  wordContent:string= ''
  wordExplanation:string= ''
  readonly dialog = inject(MatDialog);

  cardsSub : Subscription
  allCards: Card[]
  constructor(private cardMgr:cardMgrService){
    this.cardsSub = this.cardMgr.currentCardList.subscribe(data=>{
      // this.allCards = [...data]
      this.allCards = cloneDeep(data);
      console.log(this.allCards)
    })
  }

  ngOnInit(){
    this.allCards.forEach(card=>{
      console.log(card.lastTimeChecked)
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {wordName: this.wordName,wordContent: this.wordContent,wordExplanation: this.wordExplanation, },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        console.log(result)
        this.wordName =result.name,
        this.wordContent =result.content,
        this.wordExplanation = result.explanation
        console.log(this.wordName,this.wordContent,this.wordExplanation)
        this.cardMgr.addCard(this.wordName,this.wordContent,this.wordExplanation)
      }
    });
  }


}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialogs/dialog-card-setter.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule,MatDialogTitle
    ,MatDialogContent,MatDialogActions,MatDialogClose
  ],
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly wordName = model(this.data.wordName);
  readonly wordContent = model(this.data.wordContent);
  readonly wordExplanation = model(this.data.wordExplanation);

  onNoClick(): void {
    this.dialogRef.close();
  }
}