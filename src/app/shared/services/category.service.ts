import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Result from '../types/result';
import CategoryViewDto from '../dtos/category-view-dto';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Result<CategoryViewDto[]>>(
      'http://localhost:5150/Category'
    );
  }
}
