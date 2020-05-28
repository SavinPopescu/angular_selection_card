import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services/data.service';
import { TreeItem } from './tree-item/TreeItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My selection list';

  data: TreeItem[];

  constructor(private dataService: DataService){

  }

  ngOnInit(){
    this.dataService.loadData().subscribe(d => {
      this.data = d;
    });
  }

}
