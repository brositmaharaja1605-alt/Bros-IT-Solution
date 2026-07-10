// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }

// import { Component, HostListener } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

//   navShadow = false;

//   @HostListener('window:scroll')
//   onScroll() {
//     this.navShadow = window.scrollY > 20;
//   }

// }

import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { IndustriesComponent } from '../industries/industries.component';
import { CustomersComponent } from '../customers/customers.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutComponent } from '../about/about.component';
import { RouterOutlet } from '@angular/router';
import { HeroSliderComponent } from '../hero-slider/hero-slider.component';




declare const AOS: any;
declare const lucide: any;
declare const ApexCharts: any;

interface Testimonial { name: string; role: string; text: string; img: string; }
interface PricingPlan { name: string; price: string; per: string; desc: string; feats: string[]; cta: string; featured: boolean; }
interface Stat { num: number | string; suffix: string; label: string; isNumeric: boolean; display: string; }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent,HeroSliderComponent, AboutComponent, ProductComponent, IndustriesComponent, CustomersComponent, RouterOutlet],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  industries: [string, string][] = [
    ['store', 'Supermarket'], ['gem', 'Jewellery'], ['utensils', 'Restaurant'], ['cookie', 'Bakery'],
    ['shirt', 'Textile'], ['pill', 'Pharmacy'], ['smartphone', 'Mobile Shop'], ['hammer', 'Hardware'],
    ['cpu', 'Electronics'], ['scissors', 'Salon'], ['footprints', 'Footwear'], ['shopping-basket', 'Grocery']
  ];

  whyItems: [string, string, string, string][] = [
    ['zap', '#F59E0B', 'Lightning Fast Billing', 'Complete a sale in seconds with keyboard shortcuts and smart search.'],
    ['scan-barcode', '#2563EB', 'Barcode Support', 'Scan and bill instantly with any standard barcode scanner.'],
    ['boxes', '#E30613', 'Inventory Management', 'Real-time stock tracking across every branch and warehouse.'],
    ['file-check-2', '#10B981', 'GST Ready', 'Auto-generate GST-compliant invoices and filing-ready reports.'],
    ['message-circle', '#25D366', 'WhatsApp Invoice', 'Send bills directly to customers over WhatsApp in one tap.'],
    ['hard-drive-download', '#2563EB', 'Google Drive Backup', 'Automatic daily backups so your data is never at risk.'],
    ['wifi-off', '#F59E0B', 'Offline + Online Mode', 'Keep billing even without internet — auto-syncs when back online.'],
    ['users', '#E30613', 'Multi User', 'Role-based logins for cashiers, managers and owners.'],
    ['building-2', '#10B981', 'Multi Branch', 'Manage unlimited branches from a single dashboard.'],
    ['cloud', '#2563EB', 'Cloud Sync', 'Your data updates instantly across every device.'],
    ['line-chart', '#F59E0B', 'Live Mobile Reports', 'Check sales and stock from your phone, anywhere.'],
    ['shield', '#E30613', 'Secure Database', 'Encrypted, access-controlled data storage built for retail.']
  ];

  coreModules: [string, string, string][] = [
    ['receipt', 'Billing', 'Fast, intuitive billing screen built for high-volume counters.'],
    ['package', 'Inventory', 'Track stock levels, batches and variants in real time.'],
    ['shopping-cart', 'Purchase', 'Manage purchase orders and supplier deliveries end-to-end.'],
    ['trending-up', 'Sales', 'Track daily, weekly and monthly sales performance.'],
    ['heart-handshake', 'CRM', 'Build customer profiles and track purchase history.'],
    ['calculator', 'Accounting', 'Simplified books that stay audit-ready year round.'],
    ['truck', 'Supplier', 'Manage supplier ledgers, dues and payment schedules.'],
    ['user', 'Customer', 'Customer database with credit limits and loyalty tracking.'],
    ['wallet', 'Expenses', 'Log and categorize every business expense.'],
    ['arrow-left-right', 'Stock Transfer', 'Move inventory between branches with full traceability.']
  ];

  advModules: [string, string, string][] = [
    ['printer', 'Barcode Printing', 'Design and print custom barcode labels in bulk.'],
    ['qr-code', 'QR Billing', 'Contactless billing with scan-to-pay QR codes.'],
    ['file-text', 'GST Reports', 'One-click GSTR-ready reports for every filing period.'],
    ['bar-chart-3', 'Analytics', 'Deep insights into sales trends and product performance.'],
    ['layout-dashboard', 'Dashboard', 'A single view of your entire business, live.'],
    ['smartphone', 'Mobile App', 'Manage your business on the go, from any device.'],
    ['cloud-upload', 'Cloud Backup', 'Automatic, encrypted backups of every transaction.'],
    ['shield-check', 'Role Management', 'Granular permissions for every team member.'],
    ['tag', 'Offer Management', 'Run discounts, combos and seasonal offers easily.'],
    ['gift', 'Loyalty Points', 'Reward repeat customers automatically.'],
    ['layers', 'Multiple MRP', 'Handle multiple price points per product with ease.'],
    ['bell-ring', 'Reorder Alerts', 'Get notified before stock runs out.'],
    ['calendar-clock', 'Expiry Alerts', 'Track batch expiry dates automatically.'],
    ['credit-card', 'Credit Management', 'Track customer dues and repayment schedules.']
  ];

  ledgerModules: [string, string, string][] = [
    ['book-open', 'Ledger', 'A complete, always up-to-date account ledger.'],
    ['banknote', 'Cash Book', 'Track every cash transaction in real time.'],
    ['landmark', 'Bank Book', 'Reconcile bank transactions without spreadsheets.'],
    ['calendar-days', 'Day Book', 'A daily summary of every transaction, automatically.']
  ];

  // solutions: [string, string, string, string][] = [
  //   ['store', '#2563EB', 'Retail Store', 'Fast checkout and inventory built for general retail.'],
  //   ['gem', '#E30613', 'Jewellery Shop', 'Purity, hallmark and making-charge aware billing.'],
  //   ['utensils', '#F59E0B', 'Restaurant POS', 'Table management, KOT printing and quick billing.'],
  //   ['shirt', '#10B981', 'Textile Shop', 'Variant-heavy inventory for sizes, colors and fabrics.'],
  //   ['cookie', '#F59E0B', 'Bakery', 'Perishable stock tracking with expiry alerts.'],
  //   ['shopping-basket', '#2563EB', 'Supermarket', 'High-volume billing with barcode-first workflows.'],
  //   ['cpu', '#E30613', 'Electronics', 'Serial number and warranty tracking built in.'],
  //   ['pill', '#10B981', 'Medical Shop', 'Batch, expiry and schedule-drug compliance.'],
  //   ['smartphone', '#2563EB', 'Mobile Store', 'IMEI tracking and EMI billing support.'],
  //   ['footprints', '#F59E0B', 'Footwear', 'Size and style matrix inventory made simple.'],
  //   ['gift', '#E30613', 'Gift Shop', 'Combo offers and festive season billing.'],
  //   ['hammer', '#10B981', 'Hardware', 'Bulk unit conversions and supplier-linked stock.']
  // ];

  solutions: [string, string, string, string, string][] = [
  ['store', '#2563EB', 'Retail Store', 'Fast checkout and inventory built for general retail.', '/retail-store'],
  ['gem', '#E30613', 'Jewellery Shop', 'Purity, hallmark and making-charge aware billing.', '/jewellery-shop'],
  ['utensils', '#F59E0B', 'Restaurant POS', 'Table management, KOT printing and quick billing.', '/restaurant-pos'],
  ['shirt', '#10B981', 'Textile Shop', 'Variant-heavy inventory for sizes, colors and fabrics.', '/textile-shop'],
  ['cookie', '#F59E0B', 'Bakery', 'Perishable stock tracking with expiry alerts.', '/bakery'],
  ['shopping-basket', '#2563EB', 'Supermarket', 'High-volume billing with barcode-first workflows.', '/supermarket'],
  ['cpu', '#E30613', 'Electronics', 'Serial number and warranty tracking built in.', '/electronics'],
  ['pill', '#10B981', 'Medical Shop', 'Batch, expiry and schedule-drug compliance.', '/medical-shop'],
  ['smartphone', '#2563EB', 'Mobile Store', 'IMEI tracking and EMI billing support.', '/mobile-store'],
  ['footprints', '#F59E0B', 'Footwear', 'Size and style matrix inventory made simple.', '/footwear'],
  ['gift', '#E30613', 'Gift Shop', 'Combo offers and festive season billing.', '/gift-shop'],
  ['hammer', '#10B981', 'Hardware', 'Bulk unit conversions and supplier-linked stock.', '/hardware']
];


  cloudFeats: string[] = ['Cloud Billing', 'Branch Sync', 'Live Reports', 'Mobile App', 'Backup', 'Multi Device Login', 'Data Security', 'Automatic Updates'];
  get cloudCol1(): string[] { return this.cloudFeats.slice(0, Math.ceil(this.cloudFeats.length / 2)); }
  get cloudCol2(): string[] { return this.cloudFeats.slice(Math.ceil(this.cloudFeats.length / 2)); }

  devices: [string, string, string][] = [
    ['scan-line', 'Barcode Scanner', '1D/2D compatible'],
    ['printer', 'Receipt Printer', '58mm & 80mm thermal'],
    ['archive', 'Cash Drawer', 'Auto-open on sale'],
    ['monitor-smartphone', 'Touch POS', 'All-in-one terminal'],
    ['tag', 'Label Printer', 'Custom barcode labels'],
    ['scale', 'Weighing Scale', 'Auto price calculation'],
    ['qr-code', 'QR Scanner', 'UPI & QR payments'],
    ['printer-check', 'Thermal Printer', 'High-speed invoice print']
  ];

  stats: Stat[] = [
    { num: 10000, suffix: '+', label: 'Businesses', isNumeric: true, display: '0' },
    { num: 50, suffix: '+', label: 'Cities', isNumeric: true, display: '0' },
    { num: 99.9, suffix: '%', label: 'Server Uptime', isNumeric: true, display: '0' },
    { num: '24×7', suffix: '', label: 'Support', isNumeric: false, display: '24×7' },
    { num: 15, suffix: '+ Years', label: 'Experience', isNumeric: true, display: '0' }
  ];
  private statsAnimated = false;
  private statsObserver?: IntersectionObserver;

  testimonials: Testimonial[] = [
    { name: 'Ramesh Kumar', role: 'Owner, City Supermarket', text: 'BillEase cut our billing time in half. GST filing used to take a full day — now it takes minutes.', img: 'https://i.pravatar.cc/100?img=12' },
    { name: 'Priya Shah', role: 'Manager, Shah Jewellers', text: 'Managing purity and making charges across 3 branches was a nightmare before BillEase. Now everything just syncs.', img: 'https://i.pravatar.cc/100?img=32' },
    { name: 'Arjun Nair', role: 'Founder, Spice Route Restaurant', text: 'The offline mode saved us during a network outage on our busiest weekend. Never missed a single order.', img: 'https://i.pravatar.cc/100?img=51' },
    { name: 'Meena Iyer', role: 'Owner, Iyer Textiles', text: 'Tracking size and color variants across our textile stock finally feels effortless.', img: 'https://i.pravatar.cc/100?img=45' }
  ];
  testiIndex = 0;
  private testiTimer: any;

  plans: PricingPlan[] = [
    { name: 'Starter', price: '₹499', per: '/month', desc: 'For single-store businesses just getting started.', feats: ['1 Branch', '1 User Login', 'Billing & Inventory', 'Basic Reports', 'Email Support'], cta: 'Start Free Trial', featured: false },
    { name: 'Professional', price: '₹1,299', per: '/month', desc: 'For growing businesses with multiple staff.', feats: ['Up to 3 Branches', '5 User Logins', 'GST Reports & Ledgers', 'WhatsApp Invoicing', 'Priority Support'], cta: 'Start Free Trial', featured: true },
    { name: 'Enterprise', price: 'Custom', per: '', desc: 'For multi-branch chains needing full control.', feats: ['Unlimited Branches', 'Unlimited Users', 'Advanced Analytics', 'Dedicated Account Manager', '24×7 Phone Support'], cta: 'Contact Sales', featured: false }
  ];

  faqData: { [key: string]: [string, string][] } = {
    Billing: [
      ['Can I bill without internet?', "Yes, BillEase works fully offline and automatically syncs your data once you're back online."],
      ['Does it support barcode scanning?', 'Yes, BillEase works with all standard USB and Bluetooth barcode scanners out of the box.']
    ],
    Cloud: [
      ['Is my data backed up automatically?', 'Yes, every transaction is backed up to the cloud in real time, with additional daily Google Drive backups.'],
      ['Can I access reports remotely?', 'Yes, use the mobile app or web dashboard to view live reports from anywhere.']
    ],
    GST: [
      ['Is BillEase GST compliant?', 'Yes, all invoices are GST-ready and reports are formatted for direct GSTR filing.'],
      ['Can I generate e-way bills?', 'Yes, e-way bill generation is supported on the Professional and Enterprise plans.']
    ],
    Support: [
      ['What support channels are available?', 'Email support on all plans, with priority chat and 24x7 phone support on higher tiers.'],
      ['Do you offer onboarding help?', 'Yes, every new account gets free setup assistance and data migration support.']
    ],
    Hardware: [
      ['What hardware does BillEase support?', 'Barcode scanners, receipt/thermal/label printers, cash drawers, weighing scales and touch POS terminals.'],
      ['Do I need special hardware to start?', 'No — BillEase works on any Windows, Android or web browser device to begin with.']
    ],
    Security: [
      ['How is my data secured?', 'All data is encrypted in transit and at rest, with role-based access controls for every user.'],
      ['Can I restrict staff access?', 'Yes, set granular permissions per user role, from cashier to branch manager.']
    ]
    // Pricing: [
    //   ['Is there a free trial?', 'Yes, every plan includes a 14-day free trial with no credit card required.'],
    //   ['Can I switch plans later?', 'Yes, you can upgrade or downgrade your plan at any time from your account settings.']
    // ]
  };
  faqCats: string[] = Object.keys(this.faqData);
  activeCat = 'Billing';
  openFaqIndex = 0;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (typeof lucide !== 'undefined') lucide.createIcons();
      if (typeof AOS !== 'undefined') AOS.init({ duration: 700, once: true, offset: 60 });
      this.renderCharts();
      this.observeStats();
    }, 0);
    this.testiTimer = setInterval(() => this.nextTesti(), 6000);
  }

  ngOnDestroy(): void {
    if (this.testiTimer) clearInterval(this.testiTimer);
    if (this.statsObserver) this.statsObserver.disconnect();
  }

  get currentTesti(): Testimonial { return this.testimonials[this.testiIndex]; }
  prevTesti(): void { this.testiIndex = (this.testiIndex - 1 + this.testimonials.length) % this.testimonials.length; }
  nextTesti(): void { this.testiIndex = (this.testiIndex + 1) % this.testimonials.length; }
  goToTesti(i: number): void { this.testiIndex = i; }

  setFaqCat(c: string): void { this.activeCat = c; this.openFaqIndex = 0; }
  toggleFaq(i: number): void { this.openFaqIndex = this.openFaqIndex === i ? -1 : i; }

  private observeStats(): void {
    const el = document.querySelector('.stats-section');
    if (!el) return;
    this.statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) this.animateStats(); });
    }, { threshold: 0.4 });
    this.statsObserver.observe(el);
  }

  private animateStats(): void {
    if (this.statsAnimated) return;
    this.stats.forEach(stat => {
      if (!stat.isNumeric) return;
      const target = typeof stat.num === 'number' ? stat.num : parseFloat(stat.num as string);
      if (isNaN(target) || target === 0) return;
      const isDecimal = target % 1 !== 0;
      let cur = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        stat.display = (isDecimal ? cur.toFixed(1) : Math.floor(cur).toString()) + stat.suffix;
      }, 22);
    });
    this.statsAnimated = true;
  }

  private renderCharts(): void {
    if (typeof ApexCharts === 'undefined') return;
    const heroEl = document.querySelector('#heroChart');
    if (heroEl) {
      new ApexCharts(heroEl, {
        chart: { type: 'area', height: 110, toolbar: { show: false }, sparkline: { enabled: true } },
        series: [{ name: 'Sales', data: [30, 42, 35, 58, 48, 64, 72, 60, 78, 90] }],
        stroke: { curve: 'smooth', width: 2.5 },
        colors: ['#E30613'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0 } },
        tooltip: { enabled: false }
      }).render();
    }
    const revEl = document.querySelector('#revenueChart');
    if (revEl) {
      new ApexCharts(revEl, {
        chart: { type: 'bar', height: 210, toolbar: { show: false } },
        series: [{ name: 'Revenue', data: [42, 55, 38, 66, 58, 74, 90] }],
        plotOptions: { bar: { borderRadius: 6, columnWidth: '45%' } },
        colors: ['#2563EB'],
        xaxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], labels: { style: { colors: '#9CA3AF', fontSize: '11px' } }, axisBorder: { show: false }, axisTicks: { show: false } },
        yaxis: { labels: { style: { colors: '#9CA3AF', fontSize: '11px' } } },
        grid: { borderColor: 'rgba(148,163,184,.15)', strokeDashArray: 4 },
        dataLabels: { enabled: false }
      }).render();
    }
  }
}
