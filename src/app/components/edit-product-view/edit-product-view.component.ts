import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductsApi } from 'src/app/models/product-api';

@Component({
  selector: 'app-edit-product-view',
  templateUrl: './edit-product-view.component.html',
  styleUrls: ['./edit-product-view.component.scss']
})
export class EditProductViewComponent {

  productToEdit: ProductsApi;
  colorNumbers = [1,2,3,4,5];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductsApi,
              private dialogRef: MatDialogRef<EditProductViewComponent>){

    this.productToEdit = data;
    
  }

  ngOnInit(){



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
