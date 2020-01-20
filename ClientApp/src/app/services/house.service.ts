import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private httpClient: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.httpClient.get<House[]>('/api/house');
  }

  addHouse(house: House) {
    return this.httpClient.post('/api/house', house);
  }
}
