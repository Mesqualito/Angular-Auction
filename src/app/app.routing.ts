import {Route} from "@angular/router";
import {SearchResultsComponent} from "./home/search-results/search-results.component";
import {CategoriesComponent} from "./home/categories/categories.component";

export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'categories', children: [
      { path: '', pathMatch: 'full', redirectTo: 'all' },
      { path: ':category', component: CategoriesComponent }
    ]}
];
