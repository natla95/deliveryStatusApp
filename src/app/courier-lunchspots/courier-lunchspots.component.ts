import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courier-lunchspots',
  templateUrl: './courier-lunchspots.component.html',
  styleUrls: ['./courier-lunchspots.component.scss']
})
export class CourierLunchspotsComponent implements OnInit {

  displayedStatusOfOrders = 'UNDELIVERED';

  constructor() { }

  ngOnInit() {
  }

  changeOrdersStatus(status: string) {
    this.displayedStatusOfOrders = status;
  }
}
