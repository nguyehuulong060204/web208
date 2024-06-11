import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagehomeComponent } from './components/pagehome/pagehome.component';
import { PageallproductComponent } from './components/pageallproduct/pageallproduct.component';
import { PagedetailproductComponent } from './components/pagedetailproduct/pagedetailproduct.component';
import { PagecartproductComponent } from './components/pagecartproduct/pagecartproduct.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientsComponent } from './layout/clients/clients.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { SigupComponent } from './components/sigup/sigup.component';

import { AdminaddComponent } from './components/adminadd/adminadd.component';
import { AdmincontrolsComponent } from './components/admincontrols/admincontrols.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditadminComponent } from './components/editadmin/editadmin.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path:'' , component: ClientsComponent , children : [
      {
        path:'' , component: PagehomeComponent
      },
      {
        path:'product' , component: PageallproductComponent
      },
      {
        path:'product/:id' , component: PagedetailproductComponent
      },
      {
        path:'cart' , component: PagecartproductComponent
      },
      {
        path: 'register' , component: SiginComponent
      },
      {
        path: 'login' , component: SigupComponent
      },
      {
        path: 'search' , component: SearchComponent
      }
    ]
  },
  {
    path:'admin' , component: AdminComponent , children : [
      {
        path: '' , component: AdmincontrolsComponent
      },
      {
        path: 'add' ,component : AdminaddComponent
      },
      {
        path: 'category' , component: CategoryComponent
      },
      {
        path: 'addcategory' ,component : AddCategoryComponent
      },
      {
        path: 'edit/:id' , component : EditadminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
