import { JSON_DATA } from './../../assets/data/data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

  @Input() public json: any;
  public currentSentence: number;
  public currentBackground: string;

  constructor() {
    this.currentSentence = 0;
    this.currentBackground = JSON_DATA[this.currentSentence].img;
  }

  public onClickPrev(): void {
    this.currentSentence > 0 ? this.currentSentence-- : this.currentSentence;
    this.currentBackground = JSON_DATA[this.currentSentence].img;

  }
  public onClickNext(): void {
    this.currentSentence < this.json.length -1 ? this.currentSentence++ : this.currentSentence;
    this.currentBackground = JSON_DATA[this.currentSentence].img;

  }
}
