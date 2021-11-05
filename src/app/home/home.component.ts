import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/json/data.json';
// import { JSON_DATA } from '../../assets/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public starter: boolean

  data: any = jsonData;
  // data: any = JSON_DATA;

  constructor() {
    this.starter = false;
  }

  public start():void{
    this.starter = true;
  }

}
