import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { Products } from 'src/app/models/products';
import { MatDialog, MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { AddProductViewComponent } from '../add-product-view/add-product-view.component';
import { ProductsApi } from 'src/app/models/product-api';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { EditProductViewComponent } from '../edit-product-view/edit-product-view.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  
  productList: ProductsApi[]=[];
  @ViewChild('searchProductInput') searchProductInput!: HTMLInputElement;

  constructor(private productService: ProductsServiceService,
              private dialog: MatDialog,
              private cdr: ChangeDetectorRef){
  }

  ngOnInit(){
    
    this.cdr.detectChanges();
    this.searchProductInput = document.querySelector('.searchProductInput')!;
    this.searchProductInput.focus();
    
    this.loadList();
    
  }

  ngOnChanges(){
    
    this.cdr.detectChanges();
    this.loadList();

  }


  openDialog(){
    
    let dialogRef :MatDialogRef<AddProductViewComponent>;
    dialogRef = this.dialog.open(AddProductViewComponent, {panelClass: 'custom-dialog-container'});
    return dialogRef.afterClosed().subscribe(()=>{
      //this.cdr.detectChanges();
      this.loadList();
    });
    
  }

  openUpdateDialog(product: ProductsApi){

    let dialogRef: MatDialogRef<EditProductViewComponent>;
    let data = product; 
    dialogRef = this.dialog.open(EditProductViewComponent, {data,  panelClass: 'custom-dialog-container'});
    return dialogRef.afterClosed().subscribe(()=>{
      this.loadList();
    })

  }

  deleteProduct(product: ProductsApi){

    this.cdr.detectChanges();

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {id: product.id, product_name: product.product_name},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.deteleProduct(result).subscribe(()=>{
        this.loadList();
      });
    });
    
/*
    this.productService.deteleProduct(product.id).subscribe(()=>{
      alert("Producto eliminado con exito");
      this.loadList();
    });
*/
    
  }

  loadList(){
    this.productService.getProducts().subscribe({
      next:(products: ProductsApi[]) => {
        this.productList = products;
      },
      error:(error) => {
        console.error('Error fetching products:', error);
      },
      complete:()=>{
        console.log('Fetching succesfull');
      }
    });
  }

}
