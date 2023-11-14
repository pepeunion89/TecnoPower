import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsServiceService } from 'src/app/services/products-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogsComponent } from '../dialogs/dialogs.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @Input() receivedProductsList: any[] = [];
  products_list: Products[]=[];
  cartList: any[] = [];


  // Lógica para la paginación
  itemsPerPage: number = 15;
  currentPage: number = 1;

  get paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products_list.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  totalPages() {
    return Math.ceil(this.products_list.length / this.itemsPerPage);
  }



  constructor(private products_service: ProductsServiceService,
              private cdr: ChangeDetectorRef,
              private cartService: CartService,
              private dialog: MatDialog){

  }

  ngOnInit(){

    this.cdr.detectChanges();

    this.products_service.getProducts().subscribe(
      (products: Products[]) => {
        this.products_list = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
    this.cartList = this.cartService.getCartList();

  }

  ngOnChanges(){

    this.cdr.detectChanges();
    this.products_list = this.receivedProductsList;
    this.cartList = this.cartService.getCartList();

  }

  openDialog(product: Products) {
    let dialogRef: MatDialogRef<DialogsComponent>;
    let data : Products = product;
    dialogRef = this.dialog.open(DialogsComponent, { data, panelClass: 'custom-dialog-container'});

    return dialogRef.afterClosed();
  }

}
