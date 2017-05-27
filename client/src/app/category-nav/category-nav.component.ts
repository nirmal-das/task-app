import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ta-category-nav',
  templateUrl: './category-nav.component.html',
  styles: []
})
export class CategoryNavComponent implements OnInit {

  @Input() categories = [];
  @Input() activeCategory;
  @Output() categorySelected = new EventEmitter<string> ();

  constructor() { }

  ngOnInit() { }

  isActive(category) {
    return this.activeCategory === category;
  }

  selectCategory(selectCategory) {
    this.categorySelected.emit(selectCategory);
  }
}
