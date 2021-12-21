import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItems } from 'src/app/models/carItems';
import { CartItem } from 'src/app/models/cartItem';
import { Prodcut } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[] = [];
  constructor(private cartService:CartService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.getCart();
  }

  removeProduct(product:Prodcut){
    this.cartService.removeFromCart(product);
    this.toastrService.info("Product is removed",product.productName);
  }

  getCart(){
    this.cartItems = this.cartService.listCart();
  }
}
