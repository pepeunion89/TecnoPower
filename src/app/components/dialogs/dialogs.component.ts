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

  irAPago(){
    var firstContainer = document.getElementsByClassName('first-container')[0] as HTMLElement;
    firstContainer.style.display = 'none';

    var secondContainer =document.getElementsByClassName('second-container')[0] as HTMLElement;
    secondContainer.style.display = 'block';
    
  }

  ngOnInit(){
    
  }

}
