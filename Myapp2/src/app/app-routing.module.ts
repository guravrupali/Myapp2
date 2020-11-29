import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlistComponent } from './product/plist.component';
import { PtabComponent } from './product/ptab.component';


const routes: Routes = [
{
    path:"ptab",component:PtabComponent
},
{
  path:"plist",component:PlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
