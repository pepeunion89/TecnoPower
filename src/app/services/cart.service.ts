import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getCartList(){
    return this.cartItems;
  }




}
