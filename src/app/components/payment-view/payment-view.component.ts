import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent {

  loadedCart: any [] = [];


  constructor(private router: Router,
              private cartService: CartService){

  }

  ngOnInit(){

    this.loadedCart = this.cartService.getCartList();
    console.log(this.loadedCart);

  }


  goToCategorySection(category: string){

    this.router.navigate(['/'+category]);
  
  }

  goHome(){

    this.router.navigate(['']);

  }



}
