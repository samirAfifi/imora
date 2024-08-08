import { CompresdComponent } from './component/compresd/compresd.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';

import { GridComponent } from './component/grid/grid.component';
import { SelectComponent } from './component/select/select.component';
import { MainComponent } from './component/main/main.component';

const routes: Routes = [
  { path: '', redirectTo:'main', pathMatch:'full'},
  {path:'main',component:MainComponent,children:[
    { path: '', redirectTo:'compresd', pathMatch:'full'},
    {path:'select',component:SelectComponent},
    {path:'compresd',component:CompresdComponent},
    {path:'grid',component:GridComponent},

  ] },
 
  {path:'form',component:FormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
