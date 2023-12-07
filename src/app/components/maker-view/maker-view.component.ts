import { Component, EventEmitter, Output } from '@angular/core';
import { MakersServiceService } from 'src/app/services/makers-service.service';
import { AddProductViewComponent } from '../add-product-view/add-product-view.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-maker-view',
  templateUrl: './maker-view.component.html',
  styleUrls: ['./maker-view.component.scss']
})
export class MakerViewComponent {
  
  constructor(private makerService: MakersServiceService,
              private dialogProduct: MatDialog,
              private dialogRefMaker: MatDialogRef<MakerViewComponent>,
              private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    
    this.cdr.detectChanges();

  }

  ngOnChanges(){

    this.cdr.detectChanges();

  }

 

  exit(){
    this.cdr.detectChanges();
    //
  }

}
