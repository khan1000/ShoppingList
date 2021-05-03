import { ListItems } from './../../../MockListCurrnet';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {

  currentlist = ListItems;
  constructor() { }

  ngOnInit() {
  }



}
