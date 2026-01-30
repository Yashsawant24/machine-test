import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any[] = [];
  categories: any[] = [];

  productName: string = '';
  categoryId: number | null = null;   // ✅ IMPORTANT FIX

  page = 1;
  size = 10;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadCategories(): void {
    this.categoryService.getCategories()
      .subscribe((data: any[]) => {
        this.categories = data;
      });
  }

  loadProducts(): void {
  this.productService.getProducts(this.page, this.size)
    .subscribe((res) => {
      this.products = res;
    });
}


  addProduct(): void {
    console.log('ADD PRODUCT:', this.productName, this.categoryId);

    if (!this.productName.trim() || this.categoryId === null) {
      alert('Product name and category are required');
      return;
    }

    this.productService.addProduct({
      name: this.productName,
      categoryId: this.categoryId
    }).subscribe({
      next: () => {
        this.productName = '';
        this.categoryId = null;   // ✅ reset dropdown
        this.loadProducts();
      },
      error: (err) => {
        console.error('Add product failed', err);
      }
    });
  }

  nextPage(): void {
    this.page++;
    this.loadProducts();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadProducts();
    }
  }
}
