import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ta-header',
  template: `
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">{{title}}</a>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  title = "Title";

  constructor() { }

  ngOnInit() {
  }

}
