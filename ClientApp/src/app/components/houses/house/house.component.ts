import { House } from './../../../models/house';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss']
})
export class HouseComponent implements OnInit {

  @Input() house: House;
  constructor() { }

  ngOnInit() {
  }

}
