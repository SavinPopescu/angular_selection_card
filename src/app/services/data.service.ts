import { Injectable } from '@angular/core';
import { TreeItem } from '../tree-item/TreeItem';
import { of, Observable } from 'rxjs';

@Injectable({providedIn: "root"})
export class DataService {

  loadData(): Observable<TreeItem[]>{
    let items = [
      <TreeItem>{
        value: "Blue Properties",
        selected: false,
        children: [{value: "Black Place",selected: true}, {value: "Boardwalk", selected: false} ]
    },
    <TreeItem>{
      value: "Brown Properties",
      selected: true,
      children: [{value: "Mediteranean Avenue", selected: true}, {value: "Baltic Avenue", selected: true}]
    },
    <TreeItem>{
      value: "Yellow Properties",
      selected: false,
      children: [{value: "Orange Properties", selected: false, children:
      [{value: "Hello word", selected: false}, {value: "Softia :D", selected: true, children: [{value: "Softia 2", selected: true}] }]}]
    }
  ];
  return of(items);
  }

}
