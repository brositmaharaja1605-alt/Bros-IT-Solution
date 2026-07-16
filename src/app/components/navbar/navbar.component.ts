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

  downloadDropdownOpen = false;

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



  toggleDownloadDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    this.downloadDropdownOpen = !this.downloadDropdownOpen;

    this.productsDropdownOpen = false;
    this.servicesDropdownOpen = false;
  }


  closeProductsDropdown() {
    this.productsDropdownOpen = false;
  }
  closeServicesDropdown() {
    this.servicesDropdownOpen = false;
  }

goServices(event: Event) {

  event.preventDefault();

  this.closeServicesDropdown();

  this.closeMobileMenu();

  this.router.navigate(['/services']).then(() => {

    setTimeout(() => {

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

    }, 50);

  });

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
      title: 'Web Development',
      desc: 'Modern responsive websites, business portals and custom web applications.',
      icon: 'ri-code-s-slash-line',
      color: '#2563eb',
      bgClass: 'bg-soft-blue'
    },
    {
      title: 'Mobile App Development',
      desc: 'Native & cross-platform Android and iOS mobile applications.',
      icon: 'ri-smartphone-line',
      color: '#10b981',
      bgClass: 'bg-soft-green'
    },
    {
      title: 'Windows Software Development',
      desc: 'Powerful desktop applications for retail, manufacturing and enterprises.',
      icon: 'ri-computer-line',
      color: '#f97316',
      bgClass: 'bg-soft-orange'
    },
    {
      title: 'ERP Solutions',
      desc: 'Complete ERP software for inventory, accounts, HR and operations.',
      icon: 'ri-building-4-line',
      color: '#8b5cf6',
      bgClass: 'bg-soft-purple'
    },
    {
      title: 'Billing & Inventory Software',
      desc: 'GST billing, stock management, barcode billing and purchase tracking.',
      icon: 'ri-file-list-3-line',
      color: '#facc15',
      bgClass: 'bg-soft-yellow'
    },
    {
      title: 'Barcode & RFID Solutions',
      desc: 'Barcode printing, RFID tagging and inventory automation solutions.',
      icon: 'ri-qr-code-line',
      color: '#06b6d4',
      bgClass: 'bg-soft-cyan'
    },
    {
      title: 'IoT Integration',
      desc: 'Connect smart devices, sensors and industrial automation systems.',
      icon: 'ri-cpu-line',
      color: '#ef4444',
      bgClass: 'bg-soft-red'
    },
    {
      title: 'POS Hardware Solutions',
      desc: 'Barcode scanners, receipt printers, cash drawers and POS terminals.',
      icon: 'ri-printer-line',
      color: '#ec4899',
      bgClass: 'bg-soft-pink'
    },
    {
      title: 'Annual Maintenance & Technical Support',
      desc: 'Software AMC, remote support, upgrades and on-site technical assistance.',
      icon: 'ri-customer-service-2-line',
      color: '#14b8a6',
      bgClass: 'bg-soft-teal'
    }
  ];

downloads = [
  {
    name: 'Software Brochure',
    icon: 'ri-file-pdf-2-fill',
    color: '#dc3545',
    type: 'file',
    file: 'assets/pdf/BROS IT SOLUTIONS NEW.pdf',
    downloadName: 'Bros-IT-Solutions-Brochure.pdf'
  },
  {
    name: 'Hardware Brochure',
    icon: 'ri-file-pdf-2-fill',
    color: '#f59e0b',
    type: 'file',
    file: 'assets/pdf/PRINTER & HARDWARE.pdf',
    downloadName: 'PRINTER-HARDWARE.pdf'
  },
  {
    name: 'UltraViewer',
    icon: 'ri-computer-line',
    color: '#2563eb',
    type: 'link',
    link: 'https://www.ultraviewer.net/en/UltraViewer_setup_6.6_en.exe'
  },
  {
    name: 'AnyDesk',
    icon: 'ri-remote-control-line',
    color: '#ef4444',
    type: 'link',
    link: 'https://anydesk.com/en/downloads/thank-you?dv=win_exe'
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



downloadFile(item: any): void {

  if (item.type === 'file') {

    const link = document.createElement('a');

    link.href = item.file;

    link.download = item.downloadName;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

  } else {

    window.open(item.link, '_blank');

  }

  this.downloadDropdownOpen = false;

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

  if (!target.closest('.dropdown-download-container')) {
    this.downloadDropdownOpen = false;
  }

}


  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.productsDropdownOpen = false;
    this.servicesDropdownOpen = false;
    this.downloadDropdownOpen = false;
  }


  navigateToSection(sectionId: string, event: Event) {

    event.preventDefault();

    this.closeMobileMenu();

    this.productsDropdownOpen = false;

    this.router.navigate(
      ['/'],
      {
        fragment: sectionId
      }
    ).then(() => {

      setTimeout(() => {

        const element = document.getElementById(sectionId);

        if (element) {

          element.scrollIntoView({

            behavior: 'smooth',

            block: 'start'

          });

          this.activeFragment = sectionId;

          history.replaceState(null, '', '#' + sectionId);

        }

      }, 100);

    });

  }

  openProductTab(tab: number, event: Event) {

    event.preventDefault();

    this.closeMobileMenu();

    this.productsDropdownOpen = false;

    localStorage.setItem('selectedProductTab', tab.toString());

    this.router.navigate(
      ['/'],
      {
        fragment: 'features'
      }
    ).then(() => {

      setTimeout(() => {

        const element = document.getElementById('features');

        if (element) {

          element.scrollIntoView({

            behavior: 'smooth',

            block: 'start'

          });

        }

      }, 100);

    });

  }
  updateActiveLink() {

    const fragment = this.router.parseUrl(this.router.url).fragment;

    if (fragment) {

      this.activeFragment = fragment;

    } else {

      this.activeFragment = '';

    }

  }

  /* ---------- LOGO CLICK ---------- */
  goHome(event: Event): void {

    event.preventDefault();

    this.closeMobileMenu();

    this.router.navigate(['/']).then(() => {

      window.scrollTo({

        top: 0,

        behavior: 'smooth'

      });

      history.replaceState(null, '', '/');

      this.activeFragment = '';

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