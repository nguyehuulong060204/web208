import { Component } from '@angular/core';
import { CategoryService } from '../../category.service';
import { typeCategory } from '../type/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
    constructor( private cateService : CategoryService
    ) {}

    cateLisst : typeCategory [] =[]
    ngOnInit() {
      this.cateService.get_allCategory().subscribe(
        data => {
          this.cateLisst = data
        }
      )
    }
    DeleteCate = (id :any) =>{
      if(confirm("bạn chắc chắn muốn xóa ?")) {
        this.cateService.delete_cate(id).subscribe(
          data => {
            alert("Đã xóa danh mục !")
            window.location.reload()
          }
        )
      }
    } 
}
