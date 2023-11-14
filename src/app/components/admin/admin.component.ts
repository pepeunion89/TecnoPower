import { Component, ViewChild } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { Products } from 'src/app/models/products';
import { MatDialog, MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { AddProductViewComponent } from '../add-product-view/add-product-view.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  
  productList: Products[]=[];
  @ViewChild('searchProductInput') searchProductInput!: HTMLInputElement;

  constructor(private productService: ProductsServiceService,
              private dialog: MatDialog){
  }

  ngOnInit(){
    
    this.searchProductInput = document.querySelector('.searchProductInput')!;
    this.searchProductInput.focus();
    
    this.productService.getProducts().subscribe(
      (products: Products[]) => {
        this.productList = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }


  openDialog(){

    let dialogRef :MatDialogRef<AddProductViewComponent>;
    dialogRef = this.dialog.open(AddProductViewComponent, { panelClass: 'custom-dialog-container'});
    return dialogRef.afterClosed();
    
  }

}
