import { Component } from '@angular/core';
import { IProduct } from '../type/product';
import axios from 'axios';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
    productlisst : IProduct[] = []
      async ngOnInit() {
        const {data} = await axios.get('http://localhost:3000/products')
        console.log(data);
        this.productlisst = data
        console.log(this.productlisst);
    
    }
}
