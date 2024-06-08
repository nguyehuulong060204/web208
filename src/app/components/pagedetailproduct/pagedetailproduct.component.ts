import { Component } from '@angular/core';
import { IProduct } from '../type/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-pagedetailproduct',
  templateUrl: './pagedetailproduct.component.html',
  styleUrl: './pagedetailproduct.component.css'
})
export class PagedetailproductComponent {
    productDEtail : IProduct= {} as IProduct
    constructor (
      private route : ActivatedRoute,
      private proSevices : ProductsService
    ){}
    ngOnInit() {
      const productId = this.route.snapshot.params['id']
      this.proSevices.Get_Product_By_ID(productId).subscribe(
        data => {
          this.productDEtail = data
        }
      )
    }
  //   productlisst : IProduct[] = []
  //   async ngOnInit() {
  //     const {data} = await axios.get('http://localhost:3000/products')
  //     console.log(data);
  //     this.productlisst = data
  //     console.log(this.productlisst);
  
  // }
}   
