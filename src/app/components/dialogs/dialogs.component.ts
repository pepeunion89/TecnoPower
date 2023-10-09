import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Products) {}

  dataForm: any={

    productName: "",
    price: 0,
    paymentMethod: ""

  }

  paymentMethodSelected:string = "Transferencia";

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
