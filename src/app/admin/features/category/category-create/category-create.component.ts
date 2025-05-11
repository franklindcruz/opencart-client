import { Component } from '@angular/core';
import CategoryCreateDto from '../../../../shared/dtos/category-create-dto';
import { NgForm, NgModel } from '@angular/forms';
import { CategoryService } from '../../../../shared/services/category.service';

@Component({
  selector: 'app-category-create',
  standalone: false,
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css',
})
export class CategoryCreateComponent {
    model: CategoryCreateDto = {
        name: '',
        description: null
    }

    isProcessing = false;

    constructor(private categoryService: CategoryService) {

    }

    onSubmit(form: NgForm) {
        this.isProcessing = true;
        this.categoryService.create(this.model).subscribe(result => {
            console.log(result);
            this.model.name = '';
            this.model.description = null;
            this.isProcessing = false;
        });
    }
}