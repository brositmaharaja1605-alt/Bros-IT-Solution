import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../navbar/navbar.component';

@Component({
  selector: 'app-mobile-store',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './mobile-store.component.html',
  styleUrls: ['./mobile-store.component.css']
})
export class MobileStoreComponent {

}