import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NumberFormatPipe } from './NumberFormatPipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { PaymentViewComponent } from './components/payment-view/payment-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContainerComponent,
    HeaderComponent,
    FooterComponent,
    NumberFormatPipe,
    DialogsComponent,
    CategoryViewComponent,
    PaymentViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
