import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu-component',
  templateUrl: './nav-menu-component.component.html',
  styleUrls: ['./nav-menu-component.component.css']
})
export class NavMenuComponentComponent {

  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
