import { HouseService } from './../../services/house.service';
import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses: House[] = [];
  constructor(private houseservice: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses() {
    this.houseservice.getHouses().subscribe(
      (data: House[]) => this.houses = data
    );
  }

}
