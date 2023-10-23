import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Products,
                      public dialogRef: MatDialogRef<DialogsComponent>,
                      private cartService: CartService) {}

  dataForm: any={

    productName: "",
    price: 0,
    paymentMethod: ""

  }

  paymentMethodSelected:string = "Transferencia";
  flagSeeDetails: number = 0;

  closeWindow(){
    this.dialogRef.close();
  }

  seeDetails(){

    var detailsContainer = document.getElementsByClassName('description')[0] as HTMLElement;
    var productImg = document.getElementsByClassName('product-img')[0] as HTMLElement;
    var productTitle = document.getElementsByClassName('product-title')[0] as HTMLElement;
    var containerImg = document.getElementsByClassName('container-img')[0] as HTMLElement;
    var containerImgTitle = document.getElementsByClassName('container-img-title')[0] as HTMLElement;
    var arrow = document.getElementsByClassName('arrow')[0] as HTMLElement;
    var seeDetailsButton = document.getElementsByClassName('see-details')[0] as HTMLElement;
    
    if(this.flagSeeDetails===0){

      detailsContainer.style.height = '220px';
      //detailsContainer.style.marginTop = '-260px';

      containerImg.style.width = '80px';
      containerImg.style.height = '80px';

      productImg.style.height = '100%';

      productTitle.style.fontSize = '20px';
      productTitle.style.padding = '16px 0 0 0';

      containerImgTitle.style.display = 'flex';

      arrow.style.rotate = "270deg";

      //seeDetailsButton.style.textDecoration = 'underline';

      this.flagSeeDetails=1;

    }else{

      detailsContainer.style.height = '0px';
      //detailsContainer.style.marginTop = '0px';

      productImg.style.height = '220px';

      containerImg.style.height = '220px';
      containerImg.style.width = 'auto';

      productTitle.style.fontSize = '26px';
      //productTitle.style.lineHeight = '26px';

      productImg.style.height = 'auto';

      containerImgTitle.style.display = 'block';

      arrow.style.rotate = "90deg";

      //seeDetailsButton.style.textDecoration = 'none';

      this.flagSeeDetails=0;

    }

  }

  goToPayment(){
    var firstContainer = document.getElementsByClassName('first-container')[0] as HTMLElement;
    var secondContainer =document.getElementsByClassName('second-container')[0] as HTMLElement;
    var payButton = document.getElementsByClassName('buy-button')[0] as HTMLElement;
    
    firstContainer.style.display = 'none';

    secondContainer.style.display = 'flex';
    secondContainer.style.flexDirection = 'column';

    payButton.style.marginTop = 'auto';
    
  }

  backToDetails(){

    var firstContainer = document.getElementsByClassName('first-container')[0] as HTMLElement;
    firstContainer.style.display = 'block';

    var secondContainer =document.getElementsByClassName('second-container')[0] as HTMLElement;
    secondContainer.style.display = 'none';

  }

  addToCart(data:any){
    this.cartService.addToCart(data);
    this.closeWindow();
  }

  pay(){

    this.dataForm.productName = this.data.product_name;
    this.dataForm.price = document.getElementById('price')!.innerHTML;
    this.dataForm.payMethod = this.paymentMethodSelected;
    
    if(this.dataForm.payMethod==="Tarjeta"){

      alert("MERCAOD PAGO!")

    }else{
      const whatsapp = 'https://api.whatsapp.com/send?phone=3425316915&text=%C2%A1'+
                      'Hola!%20Quiero%20comprar:%0A%0A'+this.dataForm.productName+"%0A"+
                      this.dataForm.payMethod+"%0A"+
                      this.dataForm.price;
                      //'%0A%0AAuriculares%20XIAOMI%20Redmi%20Buds%203%20PRO%0A EFECTIVO%0A $19.000,00'
      window.open(whatsapp);
    }

  }

  ngOnInit(){
    
  }

}
