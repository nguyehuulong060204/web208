import { CategoryService } from './../../category.service';
import { Component } from '@angular/core';
import { IProduct } from '../type/product';
import axios from 'axios';
import { typeCategory } from '../type/category';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pageallproduct',
  templateUrl: './pageallproduct.component.html',
  styleUrl: './pageallproduct.component.css'
})
export class PageallproductComponent {
  productlisst: IProduct[] = [];
  cateForm = new FormGroup({
    categories: new FormControl('')
  });
  categories: typeCategory[] = [];
  
  constructor(private categoryService: CategoryService) {}

  async ngOnInit() {
    const { data } = await axios.get('http://localhost:3000/products');
    console.log(data);
    this.productlisst = data;
    console.log(this.productlisst);
    this.loadCategories();
    
    // Lắng nghe sự kiện thay đổi của form control categories
    this.cateForm.controls.categories.valueChanges.subscribe(category => {
      this.onChange(category);
    });
  }

  loadCategories() {
    this.categoryService.Get_Categories().subscribe((data: typeCategory[]) => {
      this.categories = data;
    });
  }

  onChange = (category: string | null) => {
    if (category) {
      this.categoryService.getProductsByCategory(category).subscribe(
        products => {
          this.productlisst = products;
        });
    }
  }
  async resetForm  () {
    this.cateForm.reset();
    const { data } = await axios.get('http://localhost:3000/products');
    console.log(data);
    this.productlisst = data;
  }
}
