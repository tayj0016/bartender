import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = [];
  currentOrder: any = [];
  currentIndex: number = -1; 
  error = false;
  errorMsg = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(`${environment.baseAPIURL}/orders`).subscribe(response => {
      this.orders = response as [];
    })
  }

  getTotal(order: any[]) {
    let total = 0;

    order.forEach((item) => {
      total += Number(item.price);
    });

    return total;
  }

  ViewOrder(index: number) {
    this.currentIndex = index; 
    this.http.get(`${environment.baseAPIURL}/orders/${index}`).subscribe(response => {
      this.currentOrder = response as [];
    })
  }

  OrderTotal() {
    let total = 0;

    this.currentOrder.forEach((item: { price: any; }) => {
      total += Number(item.price);
    });

    return total;
  }

  CompleteOrder() {
    this.http.delete(`${environment.baseAPIURL}/orders/${this.currentIndex}`).subscribe({
      next: (r) => this.router.navigate(['/orders'])
      .then(() => {
        window.location.reload();
      }),
      error: (e) => { this.error = true, this.errorMsg = e.error.message }
    });
  }
}
