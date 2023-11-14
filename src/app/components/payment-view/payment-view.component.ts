import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment-view',
  templateUrl: './payment-view.component.html',
  styleUrls: ['./payment-view.component.scss']
})
export class PaymentViewComponent {

  searchInputDisplay: string = 'none';
  flagView = 0;

  loadedCart: any [] = [];
  cartList: any [] = [];
  total: number = 0;
  paymentMethodSelected:string = "Transferencia";

  dataForm: any={

    productName: "",
    price: 0,
    paymentMethod: ""

  }

    constructor(private router: Router,
    private cartService: CartService,
    private cdr: ChangeDetectorRef){

    }

ngOnInit(){

this.cdr.detectChanges();

this.total = 0;

this.loadedCart = this.cartService.getCartList();

let cartCircleQuantity = document.getElementsByClassName('cartCircleQuantity')[0] as HTMLElement;

this.cartList = this.cartService.getCartList();

if(this.cartList.length===0){
  this.flagView = 0;
}else{
  this.flagView = 1;
}

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

if(this.cartList.length===0){
  this.flagView = 0;
}else{
  this.flagView = 1;
}

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

  deacreaseQuantity(data: any){

    let quantityValue = document.getElementsByClassName(data)[0] as HTMLElement;

    console.log("CANTIDAD: "+quantityValue.textContent);
    
  }

  increaseQuantity(data: any){

  }

  removeItem(idProduct: number){

    this.total=0;

    this.cdr.detectChanges();

    for(let index=0; index<this.loadedCart.length; index++){

      if(this.loadedCart[index].id_product===idProduct){
        this.loadedCart.splice(index,1);
      }

    }

    for(let product of this.loadedCart){

      this.total += product.price;
  
    }

    if(this.loadedCart.length===0){
   
      this.flagView=0;
    }

  }



}
