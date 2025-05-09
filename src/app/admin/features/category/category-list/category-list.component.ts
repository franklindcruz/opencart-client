import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Result from '../../../../shared/types/result';
import CategoryViewDto from '../../../../shared/dtos/category-view-dto';
import { CategoryService } from '../../../../shared/services/category.service';
@Component({
  selector: 'app-category-list',
  standalone: false,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  categories?: CategoryViewDto[];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .getAll()
      .subscribe((result) => (this.categories = result.data));
  }
}
