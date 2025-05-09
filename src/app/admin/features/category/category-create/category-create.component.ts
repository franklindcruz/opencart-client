import { Component } from '@angular/core';
import CategoryCreateDto from '../../../../shared/dtos/category-create-dto';
import { NgModel } from '@angular/forms';


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

    display(name: NgModel) {
        console.log(name);
    }
}
