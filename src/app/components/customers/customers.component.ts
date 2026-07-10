// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customers',
//   standalone: true,
//   imports: [],
//   templateUrl: './customers.component.html',
//   styleUrl: './customers.component.css'
// })
// export class CustomersComponent {

// }
import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
/* import { TopHeaderComponent } from '../top-header/top-header.component'; */


interface Testimonial { name: string; role: string; text: string; img: string; }

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements AfterViewInit, OnDestroy {

  testimonials: Testimonial[] = [
    { name: 'Ramesh Kumar', role: 'Owner, City Supermarket', text: 'BillEase cut our billing time in half. GST filing used to take a full day — now it takes minutes.', img: 'https://i.pravatar.cc/100?img=12' },
    { name: 'Priya Shah', role: 'Manager, Shah Jewellers', text: 'Managing purity and making charges across 3 branches was a nightmare before BillEase. Now everything just syncs.', img: 'https://i.pravatar.cc/100?img=32' },
    { name: 'Arjun Nair', role: 'Founder, Spice Route Restaurant', text: 'The offline mode saved us during a network outage on our busiest weekend. Never missed a single order.', img: 'https://i.pravatar.cc/100?img=51' },
    { name: 'Meena Iyer', role: 'Owner, Iyer Textiles', text: 'Tracking size and color variants across our textile stock finally feels effortless.', img: 'https://i.pravatar.cc/100?img=45' }
  ];
  testiIndex = 0;
  private testiTimer: any;

  ngAfterViewInit(): void {
    this.testiTimer = setInterval(() => this.nextTesti(), 6000);
  }
  ngOnDestroy(): void {
    if (this.testiTimer) clearInterval(this.testiTimer);
  }

  get currentTesti(): Testimonial { return this.testimonials[this.testiIndex]; }
  prevTesti(): void { this.testiIndex = (this.testiIndex - 1 + this.testimonials.length) % this.testimonials.length; }
  nextTesti(): void { this.testiIndex = (this.testiIndex + 1) % this.testimonials.length; }
  goToTesti(i: number): void { this.testiIndex = i; }
}
