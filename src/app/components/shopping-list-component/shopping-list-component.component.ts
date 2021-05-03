import { CurrentList } from './../../models/current-list';
import { ListItem } from './../../models/list-item';
import { ListItems } from './../../../MockListCurrnet';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {

  currentlist = ListItems;
  itemname: string;
  constructor() { }

  ngOnInit() {
  }

  addToCurrentList()
  {
    this.currentlist.push({ItemID: 34 , ItemName: this.itemname , ListID: 0 , HighPriority: false , Index:0});

  }


}
