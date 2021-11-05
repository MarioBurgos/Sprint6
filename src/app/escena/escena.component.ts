import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent {

  @Input() public json: any;
  public currentSentence: number;
  constructor() {
    this.currentSentence = 0;
  }

  public onClickPrev(): void {
    this.currentSentence > 0 ? this.currentSentence-- : this.currentSentence;
    console.log('prev: ' +this.currentSentence);
  }
  public onClickNext(): void {
    this.currentSentence < this.json.length -1 ? this.currentSentence++ : this.currentSentence;
    console.log('next: '+this.currentSentence);

  }
}
