import { LunchSpot } from './lunch-spot.model';
import { LunchSpotsService } from './lunch-spots.service';
import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lunch-spots-list',
  templateUrl: './lunch-spots-list.component.html',
  styleUrls: ['./lunch-spots-list.component.scss']
})
export class LunchSpotsListComponent implements OnInit {

  @Input() set currentOrdersStatus(value: string) {
    this.ordersStatus = value;
    this.getLunchSpotsForCurrentStatus();
  }
  get currentOrdersStatus(): string {
    return this.ordersStatus;
  }

  lunchSpotsList: LunchSpot[];

  private ordersStatus: string;

  constructor(private lunchSpotsService: LunchSpotsService) { }

  ngOnInit() {
  }

  getLunchSpotsForCurrentStatus() {
    this.lunchSpotsService.getLunchSpots().subscribe(response => {
      this.lunchSpotsList = (response as any).lunchSpots;
    });
    // this.lunchSpotsService.getLunchSpots().pipe(
    //   map(val => this.lunchSpotsList = val)
    //   map(items => items.jsonData.filter(item => item.type === 'dev'))
    // )
    // .subscribe();
  }

}
