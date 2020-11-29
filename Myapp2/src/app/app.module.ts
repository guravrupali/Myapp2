import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PtabComponent } from './product/ptab.component';
import { FormsModule } from '@angular/forms';
import { PformComponent } from './product/pform.component';
import { PlistComponent } from './product/plist.component';
import { ProductService } from './product/product.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,PtabComponent,PformComponent,PlistComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
