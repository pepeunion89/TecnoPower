import { Component } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { Products } from 'src/app/models/products';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  productList: Products[]=[];

  constructor(productService: ProductsServiceService){

    this.productList=productService.getProducts();
    
  }

  ngOnInit(){
    
  }

}
