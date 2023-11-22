import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Categories } from 'src/app/models/categories';
import { Makers } from 'src/app/models/makers';
import { ProductsApi } from 'src/app/models/product-api';
import { Products } from 'src/app/models/products';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { MakersServiceService } from 'src/app/services/makers-service.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-add-product-view',
  templateUrl: './add-product-view.component.html',
  styleUrls: ['./add-product-view.component.scss']
})
export class AddProductViewComponent {

  categoriesList: Categories[] = [];
  categorySelected: any = "";
  makersList: Makers[] = [];
  makerSelected: any = "";              
  product: ProductsApi = {} as ProductsApi;

  constructor(private categoriesService: CategoriesServiceService,
              private productService: ProductsServiceService,
              private makersService: MakersServiceService,
              private decimalPipe: DecimalPipe,
              private dialogRef: MatDialogRef<AddProductViewComponent>){

  }

  ngOnInit(){
    this.product.price = 0;
    
    // Obtenemos listado de Categorias
    this.categoriesService.getCategories().subscribe(
      (categories: Categories[])=>{
        this.categoriesList = categories;
    },
    (error) => {
      console.error('Error fetching categories:', error);
    })

    // Obtenemos listado de Fabricantes
    this.makersService.getMakers().subscribe(
      (makers: Makers[])=>{
        this.makersList = makers;
    },(error)=>{
      console.error('Error fetching makers:',error);
    })

  }




  // Función para formatear el valor en tiempo real
  formatPrice(event: any) {
    const inputValue = event.target.value;
    let cajaVacia = "$";
    let elemento = document.getElementsByClassName('price')[0] as HTMLInputElement;
    let numeroConDecimalesSinSimbolos = elemento.value.replace(/[$.]/g, '');

    if(elemento.value.length<2){
      if(elemento.value==="$"){
        elemento.value = "";
      }else{
        cajaVacia+=inputValue;
        elemento.value = cajaVacia;
      }
    }
   
  }



  // Funcion guardar producto
  saveProduct(){
    //Vacios primero
    this.product.code_bar="";
    this.product.code_prov="";
    this.product.tag=[];
    this.product.supplier_id=null;

    //Con contenido luego
    this.categorySelected = (document.getElementsByClassName('selectedCategory')[0] as HTMLSelectElement);
    this.makerSelected = (document.getElementsByClassName('selectedMaker')[0] as HTMLSelectElement);
    this.product.stock=1;
    for(let category of this.categoriesList){
      
      if((this.categorySelected).options[this.categorySelected.value-1].text===category.category_name){
        this.product.category_id = category.id;
      }
    }
    for(let maker of this.makersList){
      if((this.makerSelected).options[this.makerSelected.value-1].text===maker.maker_name){
        this.product.maker_id = maker.id;
      }
    }
    console.log(this.product);

    this.productService.addProduct(this.product).subscribe(
      ()=>{
      alert("Producto agregado.");
    }) 
  }

  exit(){
    this.dialogRef.close();
  }

}
