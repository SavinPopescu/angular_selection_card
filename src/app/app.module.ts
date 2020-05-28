import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemSelectorComponent } from './item-selector/item-selector.component';
import { TreeItemComponent } from './tree-item/tree-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSelectorComponent,
    TreeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
