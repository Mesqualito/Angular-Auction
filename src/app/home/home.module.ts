import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {SearchResultsComponent} from './search-results/search-results.component';
import {CategoriesComponent} from './categories/categories.component';
import {MatTabsModule} from "@angular/material/tabs";
import {routes} from "../app.routing";
import {ProductGridComponent} from "./product-grid/product-grid.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    MatGridListModule,
    MatTabsModule
  ],
  declarations: [
    CategoriesComponent,
    ProductGridComponent,
    SearchResultsComponent
  ]
})
export class HomeModule {}
