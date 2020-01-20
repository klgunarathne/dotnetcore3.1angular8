import { HouseFormComponent } from './components/house-form/house-form.component';
import { HousesComponent } from './components/houses/houses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HousesComponent
  },
  {
    path: 'form',
    component: HouseFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
