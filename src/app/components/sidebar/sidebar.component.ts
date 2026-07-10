// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   standalone: true,
//   imports: [],
//   templateUrl: './sidebar.component.html',
//   styleUrl: './sidebar.component.css'
// })
// export class SidebarComponent {

// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // @Input() isOpen = false;

  @Input() isOpen = false;

  // toggleSidebar() {
  //   this.isOpen = !this.isOpen;
  // }

  closeSidebar() {
    this.isOpen = false;
  }
  

}
