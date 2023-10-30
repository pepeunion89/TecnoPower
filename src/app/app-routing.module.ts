import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';
import { PaymentViewComponent } from './components/payment-view/payment-view.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Checkout', component: PaymentViewComponent },
  { path: 'Admin', component: AdminComponent },
  { path: ':category', component: CategoryViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
