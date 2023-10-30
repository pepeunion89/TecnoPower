import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sendProductsList = new EventEmitter<any[]>();

  cartList: any[] = [];
  productsList: Products[] = [];

  constructor(private productsService: ProductsServiceService,
              private router: Router,
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

  getFilteredProducts(){

    let inputValue = (document.getElementById('searchInput') as HTMLInputElement).value;
    
    if(!(inputValue==='')){

      this.productsList = this.productsService.getSearchProductsFiltered(inputValue);

      this.sendProductsList.emit(this.productsList);

    }else{
      
      this.productsList = this.productsService.getProducts();

      this.sendProductsList.emit(this.productsList);

    }

  }

}
