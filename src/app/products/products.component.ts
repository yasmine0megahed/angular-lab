import { Component, Input, } from '@angular/core';
import { productitem } from '../../../products-list';
import { ProductcardComponent } from '../productcard/productcard.component';
import productsJason from '../../assets/products-list.json'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductcardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  items :Array <productitem> =productsJason
// @Input() items!:productitem[]
reciveIdToParent(id:number){
  }
}
