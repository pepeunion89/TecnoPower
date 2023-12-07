import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { ProductsApi } from 'src/app/models/product-api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() searchInputDisplay: string = 'flex';
  @Output() sendProductsList = new EventEmitter<any[]>();

  cartList: any[] = [];
  productsList: ProductsApi[] = [];

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

      this.productsService.getSearchProductsFiltered(inputValue).subscribe(
        (filteredProducts: ProductsApi[]) => {
          this.productsList = filteredProducts;
        },
        (error) => {
          console.error('Error fetching filtered products:', error);
        }
      );

      this.sendProductsList.emit(this.productsList);

    }else{
      
      this.productsService.getProducts().subscribe(
        (products: ProductsApi[]) => {
          this.productsList = products;
        },
        (error) => {
          console.error('Error fetching products:', error);
        }
      );

      this.sendProductsList.emit(this.productsList);

    }

  }

}
