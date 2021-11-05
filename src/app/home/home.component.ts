import { Component, OnInit } from '@angular/core';
import jsonData from '../../assets/json/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: JSON = jsonData;

  constructor() { }

  ngOnInit(): void {
  }

}
