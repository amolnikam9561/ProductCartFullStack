import { Component } from '@angular/core';
import { ProductsserviceService } from '../productsservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  isActivated = false;
  newProduct: any;

  constructor(private s: ProductsserviceService) {}

  ngOnInit() {
    this.s.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.newProduct = res;
      },
      error: (error) => {
        alert(error);
      }
    });
  }

  // ✅ Keep only ONE copy of this method
  activateButtons() {
    this.isActivated = true;
  }

  editProduct(product: any) {
    alert(`Editing product: ${product.name}`);
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.s.deleteProduct(id).subscribe({
        next: () => {
          this.newProduct = this.newProduct.filter((p: any) => p.id !== id);
        },
        error: (err) => {
          alert('Error deleting product');
        }
      });
    }
  }
}