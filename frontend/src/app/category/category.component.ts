import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any[] = [];
  categoryName: string = '';

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getCategories().subscribe((data: any[]) => {
      this.categories = data;
    });
  }

  addCategory(): void {
    if (!this.categoryName.trim()) return;

    this.categoryService.addCategory({ name: this.categoryName })
      .subscribe(() => {
        this.categoryName = '';
        this.loadCategories();
      });
  }

  deleteCategory(id: number): void {
    this.categoryService.deleteCategory(id)
      .subscribe(() => this.loadCategories());
  }
}
