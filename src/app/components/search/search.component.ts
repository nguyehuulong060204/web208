import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../type/product';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']  
})
export class SearchComponent implements OnInit { 
  productSearch: IProduct[] = [];  
  keywords: string = '';

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService  
  ) {}

  ngOnInit () {  
    this.keywords = this.route.snapshot.queryParams['keywords'];
    console.log(this.keywords);

    if (this.keywords) {
      this.searchService.SearchKeyword(this.keywords).subscribe(
        (data: IProduct[]) => {  
          this.productSearch = data;
        },
        error => {
          console.error('Error fetching search results', error);
        }
      );
    }
  }
}
