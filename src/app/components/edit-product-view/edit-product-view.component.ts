import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsApi } from 'src/app/models/product-api';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.scss']
})
export class EditProductViewComponent implements OnInit{

  productToEdit: ProductsApi;
  colorNumbers: number[]; 
  colorNames: string[];
  colorHex: string[];
  colorsChecked: boolean[] = [false,false,false,false,false];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductsApi,
              private dialogRef: MatDialogRef<EditProductViewComponent>){

    this.productToEdit = data;

    this.colorNumbers = [1,2,3,5,4];

    this.colorNames = [this.productToEdit.color1_name,
                       this.productToEdit.color2_name,
                       this.productToEdit.color3_name,
                       this.productToEdit.color4_name,
                       this.productToEdit.color5_name];

    this.colorHex = [this.productToEdit.color1_hex,
                     this.productToEdit.color2_hex,
                     this.productToEdit.color3_hex,
                     this.productToEdit.color4_hex,
                     this.productToEdit.color5_hex];

    if(this.productToEdit.color1_hex != null){
      this.colorsChecked[0] = true;
    }

    if(this.productToEdit.color2_hex != null){
      this.colorsChecked[1] = true;
    }

    if(this.productToEdit.color3_hex != null){
      this.colorsChecked[2] = true;
    }

    if(this.productToEdit.color4_hex != null){
      this.colorsChecked[3] = true;
    }

    if(this.productToEdit.color5_hex != null){
      this.colorsChecked[4] = true;
    }
    
  }

  ngOnInit(){

    let count = 1;

      for(let colorChecked of this.colorsChecked){

        if(colorChecked===true){
          console.log(count);
          this.eodColor(count);
        }

        count+=1;

      }

    
  }


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

  exit(){
    this.dialogRef.close();
  }

  updateProduct(){

  }

}
