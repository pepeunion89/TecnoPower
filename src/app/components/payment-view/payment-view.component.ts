import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent {

  loadedCart: any [] = [];
  cartList: any [] = [];
  total: number = 0;

    constructor(private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef){

}

ngOnInit(){

this.cdr.detectChanges();

this.total = 0;

this.loadedCart = this.cartService.getCartList();
console.log(this.loadedCart);

let cartCircleQuantity = document.getElementsByClassName('cartCircleQuantity')[0] as HTMLElement;

this.cartList = this.cartService.getCartList();

cartCircleQuantity.innerHTML=(String(this.cartList.length));

  for(let product of this.loadedCart){

    this.total += product.price;

  }

}

ngOnChanges(){

this.cdr.detectChanges();

this.total = 0;

let cartCircleQuantity = document.getElementsByClassName('cartCircleQuantity')[0] as HTMLElement;

this.cartList = this.cartService.getCartList();

cartCircleQuantity.innerHTML=(String(this.cartList.length));

  for(let product of this.loadedCart){

    this.total += product.price;

  }

}

  goToCategorySection(category: string){

    this.router.navigate(['/'+category]);
  
  }

  goHome(){

    this.router.navigate(['']);

  }

  goToCart(){

    this.router.navigate(['/Checkout']);

  }



}
