import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: String = 'Usama';

  constructor() {
    this.name = 'Hello'

  }

  changeName(name: String): void {
    this.name = name;
  }

}
