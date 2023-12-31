import { DecimalPipe } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/models/categories';
import { Makers } from 'src/app/models/makers';
import { ProductsApi } from 'src/app/models/product-api';
import { Tags } from 'src/app/models/tags';
import { TagsChecked } from 'src/app/models/tagsChecked';
import { CategoriesServiceService } from 'src/app/services/categories-service.service';
import { MakersServiceService } from 'src/app/services/makers-service.service';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { TagsServiceService } from 'src/app/services/tags-service.service';

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
  tagsList: Tags[] = [];            
  product: ProductsApi = {} as ProductsApi;
  newTag: Tags = {} as Tags;
  tagsChecked: boolean[] = [];
  tagsCheckedSaved: TagsChecked[] = [];
  newMaker: Makers = {} as Makers;
  colorNumbers = [1,2,3,4,5];
  requiredFields: any;
  descriptionDiv: any;

  // HTMLElement de los 3 paneles 
  addProductPanel: any;
  selectTagsPanel: any; 
  addMakerPanel: any; 

  // Mostrar u Ocultar paneles con *ngIf
  isVisibleProductPanel = true;
  isVisibleMakerPanel = false;
  isVisibleTagsPanel = false;

  constructor(private categoriesService: CategoriesServiceService,
              private productService: ProductsServiceService,
              private makersService: MakersServiceService,
              private tagService: TagsServiceService,
              private decimalPipe: DecimalPipe,
              private dialogRef: MatDialogRef<AddProductViewComponent>,
              private cdr: ChangeDetectorRef){
  }

  ngOnInit(){    
    this.cdr.detectChanges();
    this.product.price = 0;
    this.product.stock = 0;
    this.product.tags = [];
    this.requiredFields = document.getElementsByClassName('requiredFieldsDiv')[0] as HTMLElement;
    this.descriptionDiv = document.getElementsByClassName('descriptionDiv')[0] as HTMLElement;
    this.addProductPanel = document.getElementsByClassName('add-product-container')[0] as HTMLElement;
    this.selectTagsPanel = document.getElementsByClassName('selectTagsContainer')[0] as HTMLElement;
    this.addMakerPanel = document.getElementsByClassName('addMakerContainer')[0] as HTMLElement;
    
    // Obtenemos listado de Categorias
    this.categoriesService.getCategories().subscribe({
      next:(categories: Categories[])=>{
        this.categoriesList = categories;
    },
      error:(error) => {
        console.error('Error fetching categories:', error);
    },
      complete:()=>{
        console.log('Fetching succesfull');
    }
  });
  

    // Obtenemos listado de Fabricantes
  this.loadMakers();  

  // Obtenemos listado de Tags
  this.loadTags();

  }

  ngOnChanges(){
    
    this.cdr.detectChanges();

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

    let flag = 0;

    // Hacemos validaciones con mensajes de retorno
    if(this.product.product_name === undefined){
      flag=1;
      this.requiredFields.style.display = 'block';
      this.descriptionDiv.style.marginBottom = "0px";
    }

    if(this.product.price<1){
      flag=1;
      this.requiredFields.style.display = 'block';
      this.descriptionDiv.style.marginBottom = "0px";
    }

    if(this.product.description === undefined){
      flag=1;
      this.requiredFields.style.display = 'block';
      this.descriptionDiv.style.marginBottom = "0px";
    }

    if(this.product.img_url === undefined){
      flag=1;
      this.requiredFields.style.display = 'block';
      this.descriptionDiv.style.marginBottom = "0px";
    }

    // Realiza el addProduct si cumple con las condiciones
    if(flag===0){

      // Con contenido luego
      this.categorySelected = (document.getElementsByClassName('selectedCategory')[0] as HTMLSelectElement);
      this.makerSelected = (document.getElementsByClassName('selectedMaker')[0] as HTMLSelectElement);

      // Guardando los colores
      for(let idxColor of this.colorNumbers){
        
        
        if(idxColor===1 && (document.getElementsByClassName('enableColor-'+1)[0] as HTMLInputElement).checked){
          this.product.color1_name = (document.getElementsByClassName('colorName-'+1)[0] as HTMLInputElement).value;
          this.product.color1_hex = (document.getElementsByClassName('colorHex-'+1)[0] as HTMLInputElement).value;
        }

        if(idxColor===2 && (document.getElementsByClassName('enableColor-'+2)[0] as HTMLInputElement).checked){
          this.product.color2_name = (document.getElementsByClassName('colorName-'+2)[0] as HTMLInputElement).value;
          this.product.color2_hex = (document.getElementsByClassName('colorHex-'+2)[0] as HTMLInputElement).value;
        }

        if(idxColor===3 && (document.getElementsByClassName('enableColor-'+3)[0] as HTMLInputElement).checked){
          this.product.color3_name = (document.getElementsByClassName('colorName-'+3)[0] as HTMLInputElement).value;
          this.product.color3_hex = (document.getElementsByClassName('colorHex-'+3)[0] as HTMLInputElement).value;
        }

        if(idxColor===4 && (document.getElementsByClassName('enableColor-'+4)[0] as HTMLInputElement).checked){
          this.product.color4_name = (document.getElementsByClassName('colorName-'+4)[0] as HTMLInputElement).value;
          this.product.color4_hex = (document.getElementsByClassName('colorHex-'+4)[0] as HTMLInputElement).value;
        }

        if(idxColor===5 && (document.getElementsByClassName('enableColor-'+5)[0] as HTMLInputElement).checked){
          this.product.color5_name = (document.getElementsByClassName('colorName-'+5)[0] as HTMLInputElement).value;
          this.product.color5_hex = (document.getElementsByClassName('colorHex-'+5)[0] as HTMLInputElement).value;
        }

      }

      // Seteamos el stock por defecto

      for(let category of this.categoriesList){
        
        if((this.categorySelected).options[this.categorySelected.value-1].text===category.category_name){
          this.product.category = category;
        }
      }
      for(let maker of this.makersList){
        if((this.makerSelected).options[this.makerSelected.value-1].text===maker.maker_name){
          this.product.maker = maker;
        }
      }

      console.log("EL PRODUCTO QUE ESPERAS ESTA ACA: ");
      console.log(this.product);

      this.productService.addProduct(this.product).subscribe({
        next: (response)=>{
          if (response.product!) {
            // Es un objeto Product            
            this.exit();
          } else {
            // Es un mensaje de error
            console.log("Error al cargar producto. Verifique que no exista en la base de datos.");           
            this.exit();
          }          
        },
        error: (error)=>{
          alert(error);
        }        
      }) 
    }
  }

  // Funcion para seleccion de colores
  eodColor(number: number){

    let colorTextInput = document.getElementsByClassName('colorName-'+number)[0] as HTMLInputElement;
    let colorInput = document.getElementsByClassName('colorHex-'+number)[0] as HTMLInputElement;
    let chkboxInput = document.getElementsByClassName('enableColor-'+number)[0] as HTMLInputElement;

    if(chkboxInput.checked){
      colorInput.removeAttribute('disabled');
      colorInput.style.backgroundColor='lightgreen';
      colorTextInput.removeAttribute('disabled');
      colorTextInput.setAttribute('placeholder','Color...');
    }else{
      colorInput.setAttribute('disabled','');
      colorInput.style.backgroundColor='transparent';
      colorTextInput.setAttribute('disabled','');
      colorTextInput.setAttribute('placeholder','');
    }
    
  }


  // Mostrar panel de TAGS
  showTagsPanel(){
    
    this.isVisibleMakerPanel = false;
    this.isVisibleProductPanel = false;
    this.isVisibleTagsPanel = true;

    
    console.log(document.getElementsByClassName('selectTagsContainer')[0]);

    this.loadTags();
  }

  // Mostrar panel de MAKER
  showAddMaker(){
    this.isVisibleTagsPanel = false;
    this.isVisibleProductPanel = false;
    this.isVisibleMakerPanel = true;
  }

  exit(){
    this.dialogRef.close();
  }

  exitMaker(){
    this.isVisibleMakerPanel = false;
    this.isVisibleProductPanel = true;

    this.newMaker.maker_name = "";
  }
  
  // FUNCIONALIDADES PARA MAKER

  saveMaker(){
    this.makersService.addMaker(this.newMaker).subscribe({
      next: (response: Makers)=>{
        console.log("Maker added successfully.");
        console.log(response);

        this.isVisibleMakerPanel = false;
        this.isVisibleProductPanel = true;

        this.loadMakers();

        this.newMaker.maker_name = "";

      },
      error: (error:Error)=>{
        console.log(error);
      }
    })
  }

  loadMakers(){
    this.makersService.getMakers().subscribe({
      next:(makers: Makers[])=>{
        this.makersList = makers;
        this.makersList.sort((maker1, maker2)=>
        maker1.maker_name.localeCompare(maker2.maker_name)
        );
    },
      error:(error)=>{
        console.error('Error fetching makers:',error);
    },
      complete:()=>{
        console.log('Fetching succesfull');
    }
  });
  }

  // FUNCIONALIDADES PARA TAGS

  loadTags(){
    this.tagService.getTags().subscribe({
      next:(tags: Tags[])=>{
        this.tagsList = tags;
        this.tagsList.sort((tag1, tag2)=>
          tag1.tag_name.localeCompare(tag2.tag_name)
        );
        this.tagsChecked.length = this.tagsList.length;
      },
      error:(error)=>{
        console.log("Error al obtener tags: ");
        console.log(error);
      },
      complete:()=>{
        console.log("Tags fetched");
      }
    })
  }

  saveTag(){
    let productTags: Tags[] = [];
    let i = 0;

    for(let tag of this.tagsChecked){
      if(/*(document.getElementsByClassName('chkTag-'+tag.id)[0] as HTMLInputElement).checked*/tag){

        let tagModel: Tags = this.tagsList[i]
        
        productTags.push(tagModel);
      }

      i+=1;
    }

    this.product.tags = productTags;


    console.log(productTags);

    this.isVisibleTagsPanel = false;
    this.isVisibleProductPanel = true;

  }

  exitTags(){
    this.isVisibleTagsPanel = false;
    this.isVisibleProductPanel = true;
  }

  addTag(){

    this.tagService.addTag(this.newTag).subscribe({
      next: (response)=>{
        
        this.loadTags();        
        
      },
      error: (error: Error)=>{
        console.log(error);
      }
    })

  }



}
