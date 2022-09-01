import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import { Drink } from '../../models/drink.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: any = [];
  cart: any = [];
  error = false;
  errorMsg = '';

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${environment.baseAPIURL}/menu`).subscribe(response => {
      this.menu = response as [];
    })
  }

  AddItem(drink: Drink) {
    this.cart.push(drink); 
  }

  OrderTotal() {
    let total = 0;

    this.cart.forEach((item: { price: any; }) => {
      total += Number(item.price);
    });

    return total;
  }

  ClearOrder() {
    this.cart = [];
  }

  SubmitOrder() {
    this.http.post<Array<any>>(`${environment.baseAPIURL}/orders`, this.cart).subscribe({
      next: (r) => this.router.navigate(['/orders']),
      error: (e) => { this.error = true, this.errorMsg = e.error.message }
    });
  }

}
