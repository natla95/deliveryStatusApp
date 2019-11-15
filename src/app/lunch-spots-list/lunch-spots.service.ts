import { LunchSpot } from './lunch-spot.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LunchSpotsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLunchSpots(filters: {}) {
    return this.http.get<LunchSpot[]>(`${this.apiUrl}/lunchSpots`, filters);
  }
}
