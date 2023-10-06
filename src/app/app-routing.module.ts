import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryViewComponent } from './components/category-view/category-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: ':category', component: CategoryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
