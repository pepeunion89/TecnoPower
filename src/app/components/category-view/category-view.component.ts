import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent {

  products_list: Products[]=[];
  categoryNameAndId: string = "";

  constructor(private products_service: ProductsServiceService,
              private dialog: MatDialog,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    
    this.route.params.subscribe(params => {
      this.categoryNameAndId = params['category'].split("-",2);
    });

    this.products_list = this.products_service.getProductsFiltered(Number(this.categoryNameAndId[1]));

    
  }

  openDialog(product: Products) {
    let dialogRef: MatDialogRef<DialogsComponent>;
    let data : Products = product;
    dialogRef = this.dialog.open(DialogsComponent, { data, panelClass: 'custom-dialog-container'});
    return dialogRef.afterClosed();
  }

}
