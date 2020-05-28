import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TreeItem } from './TreeItem';

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.scss'],
})
export class TreeItemComponent implements OnInit {
  @Input() item: TreeItem;
  @Input() selectedItems: TreeItem[];

  @Output() selectionChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (this.item.selected) this.selectedItems.push(this.item);
  }

  check(item: TreeItem, checked: boolean) {

    if (item.selected && checked == false) {
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    }
    else if (!item.selected && checked == true) {
      this.selectedItems.push(item);
    }

    item.selected = checked;

    if (this.hasChildren(item)) {
      item.children.forEach((i) => this.check(i, checked));
    }
    else {
      this.selectionChanged.emit();
    }
  }

  hasChildren(item) {
    return item.children && item.children.length > 0;
  }

  onSelectionChanged() {
    let selected = this.item.children.every((i) => i.selected);

    if (this.item.selected != selected) {
      this.item.selected = selected;
      if (!this.item.selected){
        this.selectedItems.splice(this.selectedItems.indexOf(this.item), 1);
      }
      else {
        this.selectedItems.push(this.item);
      }

      this.selectionChanged.emit();
    }
  }
}
