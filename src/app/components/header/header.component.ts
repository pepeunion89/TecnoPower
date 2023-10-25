import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cartList: any[] = [];

  constructor(private router: Router,
              private cartService: CartService,
              private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    this.cdr.detectChanges();
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

    this.router.navigate(['/Checkout'])

  }

}
