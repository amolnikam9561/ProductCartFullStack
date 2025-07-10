import { Component } from '@angular/core';
import { ProductsserviceService } from '../productsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0
  };
  constructor(private s: ProductsserviceService ,private rout:Router) { }

  onSubmit() {
  this.s.addproduct(this.product).subscribe({
    next: (res: any) => {
      console.log(res);
      alert("Product Added Successfully")
      this.rout.navigate(['/products'])
    },
    error: (error: any) => {
      alert("Error adding product'")
    }
  });
}
  
}
