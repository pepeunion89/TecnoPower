import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { MatSliderModule } from '@angular/material/slider';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent {

  @Output() hideTopSearchInput= new EventEmitter<any>();

  products_list: Products[]=[];
  categoryNameAndId: string = "";
  brands:any[] = [];
  prices:number[] = [];
  minPrice: number = 0;
  maxPrice: number = 0;
  cartList: any[] = [];

  //document.getElementById()            SEGUIR ACA -- - - - -

  // RANGE SORT

   updateMinRange(){
    let min = document.getElementById('min-range')?.getAttribute('aria-valuetext');
    document.getElementsByClassName('min-range')[0].innerHTML = "Min: $"+String(min);
   } 

   updateMaxRange(){
    let max = document.getElementById('max-range')?.getAttribute('aria-valuetext');
    document.getElementsByClassName('max-range')[0].innerHTML = "Máx: $"+String(max);
  } 

  // END RANGE SORT

  constructor(private products_service: ProductsServiceService,
              private dialog: MatDialog,
              private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private cdr: ChangeDetectorRef){
  }

  ngOnInit(){

    this.cdr.detectChanges();

    this.hideTopSearchInput.emit('none');
    
    this.route.params.subscribe(params => {
      this.categoryNameAndId = params['category'].split("-",2);
      //alert(this.categoryNameAndId);
      this.products_list = this.products_service.getProductsFiltered(Number(this.categoryNameAndId[1]));
      this.loadBrands();
      this.minAndMaxPrice();
      this.minPrice = Math.min(...this.prices);
      this.maxPrice = Math.max(...this.prices);
      (document.getElementsByClassName('min-range')[0] as HTMLElement).innerHTML="Min: $"+String(this.minPrice);
      (document.getElementsByClassName('max-range')[0] as HTMLElement).innerHTML="Máx: $"+String(this.maxPrice);
    });


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


  openDialog(product: Products) {
    let dialogRef: MatDialogRef<DialogsComponent>;
    let data : Products = product;
    dialogRef = this.dialog.open(DialogsComponent, { data, panelClass: 'custom-dialog-container'});
    return dialogRef.afterClosed();
  }

  goToCategorySection(category: string){

    this.router.navigate(['/'+category]);
    this.loadBrands();
    this.minAndMaxPrice();
    this.minPrice = Math.min(...this.prices);
    this.maxPrice = Math.max(...this.prices);
    (document.getElementsByClassName('min-range')[0] as HTMLElement).innerHTML="Min: $"+String(this.minPrice);
    (document.getElementsByClassName('max-range')[0] as HTMLElement).innerHTML="Máx: $"+String(this.maxPrice);
  }

  goHome(){

    this.router.navigate(['']);

  }

  goToCart(){

    this.router.navigate(['/Checkout']);

  }

  loadBrands(){

    this.brands = [];

    for(let product of this.products_list){
      if(!this.brands.includes(product.maker)){
        this.brands.push(product.maker);
        console.log(product.maker);
      }
    }

  }

  minAndMaxPrice(){

    this.prices = [];

    for(let product of this.products_list){
      this.prices.push(product.price);
    }

  }

  getFilteredProducts(){

    this.cdr.detectChanges();
    let flag = 0;

    let inputValue = (document.getElementById('searchInputCategoryView') as HTMLInputElement).value;
    console.log(inputValue);
    if(!(inputValue==='')){

      this.products_list = this.products_service.getSearchProductsFilteredByCategory(inputValue, Number(this.categoryNameAndId[1]));
      console.log(this.products_list);

    }else{
      
      this.products_list = this.products_service.getProductsFiltered(Number(this.categoryNameAndId[1]));

    }

  }


  
}