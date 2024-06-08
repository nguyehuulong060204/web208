import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DautrangComponent } from './components/dautrang/dautrang.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannertowComponent } from './components/bannertow/bannertow.component';
import { AllproComponent } from './components/allpro/allpro.component';
import { ProductoneComponent } from './components/productone/productone.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { ProductowComponent } from './components/productow/productow.component';
import { Productlist2Component } from './components/productlist2/productlist2.component';
import { BannerthreeComponent } from './components/bannerthree/bannerthree.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { PageallproductComponent } from './components/pageallproduct/pageallproduct.component';
import { PagedetailproductComponent } from './components/pagedetailproduct/pagedetailproduct.component';
import { PagecartproductComponent } from './components/pagecartproduct/pagecartproduct.component';
import { CartoneComponent } from './components/cartone/cartone.component';
import { ClientsComponent } from './layout/clients/clients.component';
import { AdminComponent } from './layout/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';
import { HttpClientModule } from '@angular/common/http';
import { AdmincontrolsComponent } from './components/admincontrols/admincontrols.component';
import { AdminaddComponent } from './components/adminadd/adminadd.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditadminComponent } from './components/editadmin/editadmin.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DautrangComponent,
    BannerComponent,
    BannertowComponent,
    AllproComponent,
    ProductoneComponent,
    FooterComponent,
    ProductlistComponent,
    ProductowComponent,
    Productlist2Component,
    BannerthreeComponent,
    PagehomeComponent,
    PageallproductComponent,
    PagedetailproductComponent,
    PagecartproductComponent,
    CartoneComponent,
    ClientsComponent,
    AdminComponent,
    SiginComponent,
    SigupComponent,
    AdmincontrolsComponent,
    AdminaddComponent,
    AddCategoryComponent,
    EditadminComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
