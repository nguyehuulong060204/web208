import { Component } from '@angular/core';
import { typeMenu } from '../type/typeMenu';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    Menu : typeMenu[] = [
      {
        id: 1 ,
        name: "Home",
        path : ''
      },
      {
        id: 2 ,
        name: "Catalog",
        path : '/product'
      }
    ]

    searchForm = new FormGroup({
        keywords : new FormControl('')
    })

    router = new Router()
    onSearch() {
        const keyword = this.searchForm.controls.keywords.value
        this.router.navigate(['search'],{
          queryParams: {keywords : keyword}
        })
    }

} 
