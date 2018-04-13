import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    trigger('productsAnim',[
      state('active',style({
        opacity:'1'
      })),
      transition('void => *',[
        style({transform:'translateX(-30px)',opacity:'0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void',[
        animate('300ms ease-in-out',
        style({transform:'translateX(-30px)',opacity:'0'}))
      ]),
    ])
  ]
})
export class ProductsComponent implements OnInit {

  products = [
    {"prodName":'USB Car Charger', "description":"My description here"}
  ];

  prodName: string = '';
  description:string ='';
  state = 'active';

  constructor() { }

  ngOnInit() {
  }

  addProduct(value:any){
    this.products.push({"prodName":value.prodName,"description":value.description});
    this.prodName = '';
    this.description = '';
  }

  removeProduct(product){
    this.products.splice(product,1);
  }

}
