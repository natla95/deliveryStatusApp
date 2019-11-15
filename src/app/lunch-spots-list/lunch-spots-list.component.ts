import { LunchSpot } from './lunch-spot.model';
import { LunchSpotsService } from './lunch-spots.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lunch-spots-list',
  templateUrl: './lunch-spots-list.component.html',
  styleUrls: ['./lunch-spots-list.component.scss']
})
export class LunchSpotsListComponent implements OnInit {

  @Input() set currentOrdersStatus(value: string) {
    this.ordersStatus = value;
    this.setFilters();
    // this.getLunchSpots();
  }
  get currentOrdersStatus(): string {
    return this.ordersStatus;
  }

  lunchSpotsListFilters = {};
  lunchSpotsList: LunchSpot[];

  private ordersStatus: string;

  constructor(private lunchSpotsService: LunchSpotsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.lunchSpotsListFilters = params;
    });
  }

  setFilters() {
    debugger;
    const urlTree = this.router.createUrlTree([], {
      queryParams: this.lunchSpotsListFilters,
      queryParamsHandling: 'merge',
      preserveFragment: true
    });
    this.router.navigateByUrl(urlTree);
  }

  getLunchSpots() {
    this.lunchSpotsService.getLunchSpots(this.lunchSpotsListFilters).subscribe(response => {
      this.lunchSpotsList = response;
    });
  }

}
