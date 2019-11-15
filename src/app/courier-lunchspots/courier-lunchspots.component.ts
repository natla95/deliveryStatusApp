import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courier-lunchspots',
  templateUrl: './courier-lunchspots.component.html',
  styleUrls: ['./courier-lunchspots.component.scss']
})
export class CourierLunchspotsComponent implements OnInit {

  chosenStatusOfOrders = 'UNDELIVERED';

  constructor() { }

  ngOnInit() {
  }

  changeOrdersStatus(status: string) {
    this.chosenStatusOfOrders = status;
  }
}
