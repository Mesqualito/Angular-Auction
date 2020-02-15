import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, ValidationErrors, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorStateMatcher} from "@angular/material/core";

@Component({
  selector: 'nga-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() search = new EventEmitter();
  readonly matcher = new ShowOnFormInvalidStateMatcher();
  readonly searchForm: FormGroup;

  constructor(fb: FormBuilder, private _router: Router) {
    this.searchForm = fb.group({
      title: [, Validators.minLength(2)],
      minPrice: [, Validators.min(0)],
      maxPrice: [, Validators.min(0), Validators.max(10000)]
    }, {
      validator: [ minLessThanMaxValidator ]
    });
  }

  // user clicked search button
  onSearch(): void {
    if (this.searchForm.valid) {
      this.search.emit(); // sends an event to app component to close the search-form component
      this._router.navigate(['/search-results'], {
        queryParams: withoutEmptyValues(this.searchForm.value)
    });
    }
  }
}

// errorStateMatcher property with ErrorStateMatcher object
// which must implement isErrorState(), that takes the form control and the form
// and has the app logic to decide whether the error message has to be shown
export class ShowOnFormInvalidStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('minLessThanMax')));
  }
}

function withoutEmptyValues(object: any): any {
  return Object.keys(object).reduce((queryParams: any, key) => {
    if (object[key]) { queryParams[key] = object[key]; }
    return queryParams;
  }, {});
}

// custom validator
function minLessThanMaxValidator(group: FormGroup): ValidationErrors | null {
  const minPrice = group.controls['minPrice'].value;
  const maxPrice = group.controls['maxPrice'].value;

  if (minPrice && maxPrice) {
    return minPrice <= maxPrice ? null : { minLessThanMax: true }; // true: show the error
  } else {
    return null; // if null return: no error
  }
}
