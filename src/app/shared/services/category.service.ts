import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Result from '../types/result';
import CategoryViewDto from '../dtos/category-view-dto';
import CategoryCreateDto from '../dtos/category-create-dto';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Result<CategoryViewDto[]>>('Category');
  }

  getById(id: number) {
    return this.httpClient.get<Result<CategoryViewDto>>(`Category/${id}`);
  }

  create(data: CategoryCreateDto) {
    return this.httpClient.post<Result<any>>('Category', data);
  }

  update(id: number, data: CategoryCreateDto) {
    return this.httpClient.put<Result<any>>(`Category/${id}`, data);
  }
}
