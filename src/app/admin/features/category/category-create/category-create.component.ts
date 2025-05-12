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
      this.InitForEditMode();
    }
  }

  onSubmit(form: NgForm) {
    this.isProcessing = true;
    this.categoryService.create(this.model).subscribe((result) => {
      console.log(result);
      this.model.name = '';
      this.model.description = null;
      this.isProcessing = false;
      this.router.navigateByUrl('/admin/category');
    });
  }

  InitForEditMode() {
    this.categoryService.getById(this.id!).subscribe((result) => {
      this.model.name = result.data.name;
      this.model.description = result.data.description;
    });
  }
}
