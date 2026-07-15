import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  isScrolled = false;
  activeFragment = '';
  theme: 'light' | 'dark' = 'light';
  mobileMenuOpen = false;
  productsDropdownOpen = false;
  private routerSub?: Subscription;
  selectedProduct = 0;

  servicesDropdownOpen = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  /* ---------- CLICK TOGGLE (desktop + mobile accordion) ---------- */
  toggleProductsDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.productsDropdownOpen = !this.productsDropdownOpen;

    if (this.productsDropdownOpen) {
      this.servicesDropdownOpen = false;
    }
  }

  toggleServicesDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
    if (this.servicesDropdownOpen) {
      this.productsDropdownOpen = false;
    }
  }

  closeProductsDropdown() {
    this.productsDropdownOpen = false;
  }
  closeServicesDropdown() {
    this.servicesDropdownOpen = false;
  }


  dropdownProducts = [
    {
      title: 'Billing & POS',
      desc: 'Superfast retail billing screen with barcode support.',
      icon: 'ri-receipt-line',
      color: '#f8ef3c',
      bgClass: 'bg-soft-blue',
      tabIndex: 0
    },
    {
      title: 'Inventory Control',
      desc: 'Real-time stock tracking, variants, and expiry alerts.',
      icon: 'ri-archive-line',
      color: '#10b981',
      bgClass: 'bg-soft-green',
      tabIndex: 0
    },
    {
      title: 'GST & Accounting',
      desc: 'Auto-generate GST-compliant reports and digital ledgers.',
      icon: 'ri-calculator-line',
      color: '#f97316',
      bgClass: 'bg-soft-orange',
      tabIndex: 1
    },
    {
      title: 'CRM & Loyalty',
      desc: 'Build customer profiles, track dues and reward points.',
      icon: 'ri-heart-line',
      color: '#a855f7',
      bgClass: 'bg-soft-purple',
      tabIndex: 0
    },
    {
      title: 'Advanced Analytics',
      desc: 'Deep business insights and visual sales performance dashboards.',
      icon: 'ri-archive-line',
      color: '#06b6d4',
      bgClass: 'bg-soft-cyan',
      tabIndex: 1
    },
    {
      title: 'Cloud Backup & Sync',
      desc: 'Automated data backup with branch-to-branch synchronization.',
      icon: 'ri-cloud-line',
      color: '#ec4899',
      bgClass: 'bg-soft-pink',
      tabIndex: 1
    }
  ];

  dropdownServices = [
    {
      title: 'Website Development',
      desc: 'Responsive business websites and web applications.',
      icon: 'ri-code-s-slash-line',
      color: '#2563eb',
      bgClass: 'bg-soft-blue'
    },
    {
      title: 'Mobile App Development',
      desc: 'Android & iOS application development.',
      icon: 'ri-smartphone-line',
      color: '#10b981',
      bgClass: 'bg-soft-green'
    },
    {
      title: 'Desktop Software',
      desc: 'Windows desktop software for businesses.',
      icon: 'ri-computer-line',
      color: '#f97316',
      bgClass: 'bg-soft-orange'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Cloud hosting, backup and migration.',
      icon: 'ri-cloud-line',
      color: '#06b6d4',
      bgClass: 'bg-soft-cyan'
    },
    {
      title: 'Digital Marketing',
      desc: 'SEO, Google Ads and Social Media Marketing.',
      icon: 'ri-megaphone-line',
      color: '#ec4899',
      bgClass: 'bg-soft-pink'
    },
    {
      title: 'Point Of Sale',
      desc: 'Point of purchase is the time',
      icon: 'ri-shopping-cart-2-line',
      color: '#8b5cf6',
      bgClass: 'bg-soft-purple'
    }
  ];
  ngOnInit() {

    this.theme = (localStorage.getItem('billease-theme') as 'light' | 'dark') || 'light';

    // Apply saved theme to every page
    document.documentElement.setAttribute('data-theme', this.theme);

    if (this.theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveLink();
      }
    });

    // Run initial update
    this.updateActiveLink();

    this.route.queryParams.subscribe(params => {
      this.selectedProduct = Number(params['tab'] ?? 0);
    });

  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 80;

    // Dynamically update active section based on scroll position on home page
    if (this.router.url.split('#')[0] === '/' || this.router.url === '') {
      const sections = ['about', 'features', 'industries', 'customers'];
      let currentSection = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is near or above viewport middle and bottom is below viewport top
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection) {
        this.activeFragment = currentSection;
      } else if (window.scrollY < 100) {
        this.activeFragment = '';
      }
    }
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {

    const target = event.target as HTMLElement;

    if (!target.closest('.dropdown-products-container')) {
      this.productsDropdownOpen = false;
    }

    if (!target.closest('.dropdown-services-container')) {
      this.servicesDropdownOpen = false;
    }

  }


  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.productsDropdownOpen = false;
    this.servicesDropdownOpen = false;
  }


  navigateToSection(sectionId: string, event: Event) {
    event.preventDefault();
    this.closeMobileMenu();

    if (this.router.url === '/' || this.router.url.startsWith('/#')) {

      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        this.activeFragment = sectionId;
      }

    } else {

      this.router.navigate(['/']).then(() => {

        setTimeout(() => {
          const element = document.getElementById(sectionId);

          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            this.activeFragment = sectionId;
          }
        }, 500);

      });

    }
  }

  updateActiveLink() {
    const url = this.router.url;
    if (url.includes('#about')) {
      this.activeFragment = 'about';
    } else if (url.includes('#features')) {
      this.activeFragment = 'features';
    } else if (url.includes('#industries')) {
      this.activeFragment = 'industries';
    } else if (url.includes('#customers')) {
      this.activeFragment = 'customers';
    } else if (url === '/' || url === '') {
      // Handled by scroll listener or default empty
    } else {
      this.activeFragment = '';
    }
  }

  /* ---------- LOGO CLICK ---------- */
  goHome(event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        this.activeFragment = '';
      }, 100);
    });
  }

  /* ---------- THEME ---------- */
  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('billease-theme', this.theme);

    // Toggle class on body (for light/dark theme styles in global scss)
    if (this.theme === 'dark') {
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  /* ---------- MOBILE MENU ---------- */
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}