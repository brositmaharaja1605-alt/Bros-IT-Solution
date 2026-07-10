// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pricing',
//   standalone: true,
//   imports: [],
//   templateUrl: './pricing.component.html',
//   styleUrl: './pricing.component.css'
// })
// export class PricingComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string; price: string; per: string; desc: string;
  feats: string[]; cta: string; featured: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html'
})
export class PricingComponent {

  plans: PricingPlan[] = [
    { name: 'Starter', price: '₹499', per: '/month', desc: 'For single-store businesses just getting started.', feats: ['1 Branch', '1 User Login', 'Billing & Inventory', 'Basic Reports', 'Email Support'], cta: 'Start Free Trial', featured: false },
    { name: 'Professional', price: '₹1,299', per: '/month', desc: 'For growing businesses with multiple staff.', feats: ['Up to 3 Branches', '5 User Logins', 'GST Reports & Ledgers', 'WhatsApp Invoicing', 'Priority Support'], cta: 'Start Free Trial', featured: true },
    { name: 'Enterprise', price: 'Custom', per: '', desc: 'For multi-branch chains needing full control.', feats: ['Unlimited Branches', 'Unlimited Users', 'Advanced Analytics', 'Dedicated Account Manager', '24×7 Phone Support'], cta: 'Contact Sales', featured: false }
  ];
}
