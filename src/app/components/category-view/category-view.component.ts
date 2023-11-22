import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/compiler';
import { MatSliderModule } from '@angular/material/slider';
import { CartService } from 'src/app/services/cart.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule  } from '@angular/material/table';
import { filter } from 'rxjs';


@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss'],
})
export class CategoryViewComponent {

  searchInputDisplay: string = 'none';

  products_list: Products[]=[];
  categoryNameAndId: string = "";
  brands:any[] = [];
  prices:number[] = [];
  minPrice: number = 0;
  maxPrice: number = 0;
  cartList: any[] = [];
  minGlobal = 0;
  maxGlobal = 0;
  product_list_fixed: Products[]=[];
  filteredCheckBrand: any[]=[];
  brandFlag = 0;

  // Lógica para la paginación
  itemsPerPage: number = 10;
  currentPage: number = 1;

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products_list.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  totalPages() {
    return Math.ceil(this.products_list.length / this.itemsPerPage);
  }


  //document.getElementById()            SEGUIR ACA -- - - - -

  // RANGE SORT

   updateMinRange(){
    let min = document.getElementById('min-range')?.getAttribute('aria-valuetext');
    document.getElementsByClassName('min-range')[0].innerHTML = "Min: $"+String(min);

    this.minGlobal = Number(min);
   } 

   updateMaxRange(){
    let max = document.getElementById('max-range')?.getAttribute('aria-valuetext');
    document.getElementsByClassName('max-range')[0].innerHTML = "Máx: $"+String(max);

    this.maxGlobal = Number(max);
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
    
    this.route.params.subscribe(params => {
      this.categoryNameAndId = params['category'].split("-",2);
      //alert(this.categoryNameAndId);

      this.products_service.getProductsFiltered(Number(this.categoryNameAndId[1])).subscribe(
        (filteredProducts: Products[]) => {
          this.product_list_fixed = filteredProducts;
          this.products_list = filteredProducts;
          this.loadBrands();
          this.minAndMaxPrice();
          this.minPrice = Math.min(...this.prices);
          this.maxPrice = Math.max(...this.prices);
          (document.getElementsByClassName('min-range')[0] as HTMLElement).innerHTML="Min: $"+String(this.minPrice);
          (document.getElementsByClassName('max-range')[0] as HTMLElement).innerHTML="Máx: $"+String(this.maxPrice);
        },
        (error) => {
          console.error('Error fetching filtered products:', error);
        }
      );
      
      
      
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
      if(!this.brands.includes(product.maker.maker_name)){
        this.brands.push(product.maker.maker_name);
      }
    }

  }

  minAndMaxPrice(){

    this.prices = [];

    console.log("ARRAY TIENE: ");
    console.log(this.products_list);
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

      this.products_service.getSearchProductsFilteredByCategory(inputValue, Number(this.categoryNameAndId[1])).subscribe(
        (filteredProducts: Products[]) => {
          this.products_list = filteredProducts;
        },
        (error) => {
          console.error('Error fetching filtered products by category:', error);
        }
      );

    }else{
      
      this.products_service.getProductsFiltered(Number(this.categoryNameAndId[1])).subscribe(
        (filteredProducts: Products[]) => {
          this.products_list = filteredProducts;
        },
        (error) => {
          console.error('Error fetching filtered products:', error);
        }
      );

    }

  }

  // FUNCIONES DE FILTRO DE MENOR A MAYOR Y VICEVERSA
  downToUp(){

    this.cdr.detectChanges();

    this.products_list.sort((a,b)=>{
      if(a.price> b.price){
        return 1;
      }
      if(b.price> a.price){
        return -1;
      }
      return 0;
    });

    this.loadBrands();

  }

  upToDown(){
    
    this.cdr.detectChanges();

    this.products_list.sort((a,b)=>{
      if(a.price> b.price){
        return -1;
      }
      if(b.price> a.price){
        return 1;
      }
      return 0;
    });

    this.loadBrands();

  }

  // FUNCION DE FILTRO UPDATE RANGE

  updateListRange(){

    this.cdr.detectChanges();

    this.products_list=this.product_list_fixed.filter((product)=>{
      return product.price>=this.minGlobal && product.price<=this.maxGlobal;
    });

    let dtu = document.getElementsByClassName('dtu')[0] as HTMLInputElement;
    let utd = document.getElementsByClassName('utd')[0] as HTMLInputElement;

    if(dtu.checked){
      this.downToUp();
      alert("ACA SI PASA");
    }
    if(utd.checked){
      this.upToDown();
      alert("PASA GATO");
    }

    this.loadBrands();

   
  }

  detectChangesBrandCheckbox(brand: string){

    this.cdr.detectChanges();

    let brandSelector = document.getElementsByClassName('brand-'+brand)[0] as HTMLInputElement;

    if(brandSelector.checked){
      this.filteredCheckBrand.push(brand);
    }
    
    if(!brandSelector.checked){
      this.filteredCheckBrand.splice(this.filteredCheckBrand.indexOf(brand),1);
      console.log("Ingreso luego de descheckear!");
    }

    console.log(this.filteredCheckBrand);

    this.products_list = [];
    for(let product of this.product_list_fixed){

      for(let brandIdx of this.filteredCheckBrand){
        if(product.maker.maker_name===brandIdx){
          this.products_list.push(product);
        }
      } 

      if(this.filteredCheckBrand.length===0){
        
        this.products_list=this.product_list_fixed;
        //this.updateListRange();
      }
      
    }



  }


  
}