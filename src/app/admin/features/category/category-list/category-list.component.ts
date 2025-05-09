import { Component, OnInit } from '@angular/core';
import CategoryViewDto from '../../../../shared/dtos/category-view-dto';
import Result from '../../../../shared/types/result';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  
  categories?: CategoryViewDto[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient
      .get<Result<CategoryViewDto[]>>('http://localhost:5150/Category')
      .subscribe((res) => {
        this.categories = res.data;
      });
  }
}
