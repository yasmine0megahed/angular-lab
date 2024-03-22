import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productitem } from '../../../products-list';
import { DiscountPipe } from '../discount.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [DiscountPipe],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
  @Input() item!:productitem;
  @Output() sendIdToParent = new EventEmitter();
constructor(private router:Router){}

// viewcard(id:number){
// this.sendIdToParent.emit(id)
// // this.router.navigate([`/productdetails/${id}`])
// console.log('this msg from productcard',id)
//   }

  redirect(id:number){
    this.router.navigate([`/productdetails/${id}`])
    console.log(id)
  }

}
