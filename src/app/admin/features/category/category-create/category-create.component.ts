import { Component } from '@angular/core';
import CategoryCreateDto from '../../../../shared/dtos/category-create-dto';
import { NgForm, NgModel } from '@angular/forms';
import { CategoryService } from '../../../../shared/services/category.service';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-category-create',
  standalone: false,
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css',
})
export class CategoryCreateComponent {
  model: CategoryCreateDto = {
    name: '',
    description: null,
  };

  isProcessing = false;

  id: number | null = null;

  isEditMode = false;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEditMode = true;
      this.isProcessing = true;
      this.initForEditMode();
    }
  }

  initForEditMode() {
    this.categoryService.getById(this.id!).subscribe({
      next: (result) => {
        this.model = result.data!;
        this.isProcessing = false;
      },
      error: () => {
        alert('Something went wrong.');
        this.isProcessing = true;
      },
    });
  }

  onSubmit() {
    this.isProcessing = true;
    if (this.isEditMode) {
      this.handleEdit();
    } else {
      this.handleCreate();
    }
  }

  handleCreate() {
    this.categoryService.create(this.model).subscribe({
      next: () => {
        this.router.navigate(['/admin/category']);
      },

      error: () => {
        alert('Something went wrong.');
        this.isProcessing = false;
      },
    });
  }

  handleEdit() {
    this.categoryService.update(this.id!, this.model).subscribe({
      next: () => {
        this.router.navigate(['/admin/category']);
      },

      error: () => {
        alert('Something went wrong.');
        this.isProcessing = false;
      },
    });
  }
}
