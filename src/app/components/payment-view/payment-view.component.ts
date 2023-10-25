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

    constructor(private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef){

}

ngOnInit(){

this.cdr.detectChanges();

this.loadedCart = this.cartService.getCartList();
console.log(this.loadedCart);

let cartCircleQuantity = document.getElementsByClassName('cartCircleQuantity')[0] as HTMLElement;

this.cartList = this.cartService.getCartList();

cartCircleQuantity.innerHTML=(String(this.cartList.length));

}

ngOnChanges(){
this.cdr.detectChanges();

let cartCircleQuantity = document.getElementsByClassName('cartCircleQuantity')[0] as HTMLElement;

this.cartList = this.cartService.getCartList();

cartCircleQuantity.innerHTML=(String(this.cartList.length));
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
