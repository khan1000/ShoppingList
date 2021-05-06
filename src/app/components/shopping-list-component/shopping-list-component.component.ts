import { CurrentList } from './../../models/current-list';
import { ListItem } from './../../models/list-item';
import { ListItems } from './../../../MockListCurrnet';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { MinLengthValidator } from '@angular/forms';


@Component({
  selector: 'app-shopping-list-component',
  templateUrl: './shopping-list-component.component.html',
  styleUrls: ['./shopping-list-component.component.css']
})
export class ShoppingListComponentComponent implements OnInit {

  currentlist = [] ;
  previouslist = ListItems;
  currentItemInput: string;
  previousItemInput: string;

  constructor() { }

  ngOnInit() {
  }

  addToCurrentList(): void {
    let duplicate = false;
    for (var i = 0; i < this.currentlist.length; i++) {
      if (this.currentItemInput == this.currentlist[i].ItemName) {
        alert('already added to list');
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      this.currentlist.push({ ItemID: (new Date()).getTime(), ItemName: this.currentItemInput, ListID: 0, HighPriority: false, Index: 0 });
    }
  }

  addToPreviousList(): void {
    let duplicate = false;

    for (var i = 0; i < this.previouslist.length; i++) {
      if (this.previousItemInput === this.previouslist[i].ItemName) {
        alert('already added to list');
        duplicate = true;
        break;
      }
    }
    if (!duplicate) {
      this.previouslist.push({
        ItemID: (new Date()).getTime(),
        ItemName: this.previousItemInput,
        ListID: 1,
        HighPriority: false,
        Index: 0
      });
    }
  }

  onDeleteCurrentList(item): void {
    console.log(item)
    for (var i = 0; i < this.currentlist.length; i++) {
      if (item === this.currentlist[i].ItemName) {
        this.currentlist.splice(i, 1);
        break;
      }
    }
  }

  onDeletePreviousList(item): void {
    console.log(item);
    for (var i = 0; i < this.previouslist.length; i++) {
      if (item === this.previouslist[i].ItemName) {
        this.previouslist.splice(i, 1);
        break;
      }
    }
  }

  onEditCurrentList(item): void {
    for (var i = 0; i < this.currentlist.length; i++) {
      if (item === this.currentlist[i].ItemName) {
        this.currentlist[i].ItemName = this.currentItemInput;
        break;
      }
    }
  }

  onEditPreviousList(item): void {
    for (var i = 0; i < this.previouslist.length; i++) {
      if (item == this.previouslist[i].ItemName) {
        this.previouslist[i].ItemName = this.previousItemInput;
        break;
      }
    }
  }

}
