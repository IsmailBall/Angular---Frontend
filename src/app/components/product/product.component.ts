import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodcut } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Prodcut[] = [];
  dataLoaded: boolean = false;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]);
      }else{
        this.getProducts();
      }
    })
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
  getProductsByCategory(category:number) {
    this.productService.getProductsByCategoryId(category).subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }
}
