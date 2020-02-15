import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
import {HomeComponent} from './home.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {CategoriesComponent} from './categories/categories.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: HomeComponent}
        ]),
        FlexLayoutModule,
        MatGridListModule,
        MatTabsModule
    ],
  declarations: [HomeComponent, SearchResultsComponent, CategoriesComponent]
})
export class HomeModule { }
