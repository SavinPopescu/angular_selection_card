import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { TreeItem } from '../tree-item/TreeItem';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss'],
})
export class ItemSelectorComponent implements OnChanges {
  @Input() items: TreeItem[];
  @Output() onItemSelected = new EventEmitter<string>();

  selectedItems: TreeItem[] = [];
  expanded: boolean;

  constructor() {}

  ngOnChanges() {
    this.expanded = true;
    this.selectedItems = [];
  }

  expand() {
    this.expanded = !this.expanded;
  }

  show() {
    console.log(this.selectedItems.map(i => i.value));
  }

  getSelectedItems() {
    if (this.selectedItems.length == 0) return '';
    if (this.selectedItems.length == 1) return this.selectedItems[0].value;
    if (this.selectedItems.length > 1) return 'Multiple items selected';
  }
}
