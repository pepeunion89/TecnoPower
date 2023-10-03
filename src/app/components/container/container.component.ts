import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  products_list: Products[]=[];

  constructor(private products_service: ProductsServiceService){

  }

  ngOnInit(){

    this.products_list = this.products_service.getProducts();

  }

}
