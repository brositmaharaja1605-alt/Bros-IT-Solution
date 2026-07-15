import { register } from 'swiper/element/bundle';

register();

import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements AfterViewInit {

  @ViewChild('swiperRef')
  swiper!: ElementRef;

  solutions = [
    {
      color: '#3b82f6', // Blue
      lightColor: '#60a5fa',
      glow: 'rgba(59, 130, 246, 0.15)',
      glowSm: 'rgba(59, 130, 246, 0.25)',
      icon: 'ri-store-2-line',
      title: 'Retail Store',
      description: 'Fast checkout and inventory built for general retail.',
      route: '/retail-store'
    },
    {
      color: '#ef4444', // Red
      lightColor: '#f87171',
      glow: 'rgba(239, 68, 68, 0.15)',
      glowSm: 'rgba(239, 68, 68, 0.25)',
      icon: 'ri-vip-diamond-line',
      title: 'Jewellery Shop',
      description: 'Purity, hallmark and making-charge aware billing.',
      route: '/jewellery-shop'
    },
    // Chit Fund
    {
      color: '#16a34a', // Green
      lightColor: '#4ade80',
      glow: 'rgba(22, 163, 74, 0.15)',
      glowSm: 'rgba(22, 163, 74, 0.25)',
      icon: 'ri-coins-line',
      title: 'Chit Fund',
      description: 'Manage members, auctions, installments and payment collections.',
      route: '/chit-fund'
    },

    // Pawn Broking
    {
      color: '#ca8a04', // Gold
      lightColor: '#facc15',
      glow: 'rgba(202, 138, 4, 0.15)',
      glowSm: 'rgba(202, 138, 4, 0.25)',
      icon: 'ri-safe-2-line',
      title: 'Pawn Broking',
      description: 'Handle pledged items, loan accounts, interest and redemption tracking.',
      route: '/pawn-broking'
    },
    {
      color: '#f97316', // Orange
      lightColor: '#fb923c',
      glow: 'rgba(249, 115, 22, 0.15)',
      glowSm: 'rgba(249, 115, 22, 0.25)',
      icon: 'ri-restaurant-2-line',
      title: 'Restaurant POS',
      description: 'Table management, KOT printing and quick billing.',
      route: '/restaurant-pos'
    },
    {
      color: '#10b981', // Green
      lightColor: '#34d399',
      glow: 'rgba(16, 185, 129, 0.15)',
      glowSm: 'rgba(16, 185, 129, 0.25)',
      icon: 'ri-shirt-line',
      title: 'Textile Shop',
      description: 'Variant-heavy inventory for sizes, colors and fabrics.',
      route: '/textile-shop'
    },
    {
      color: '#eab308', // Yellow
      lightColor: '#fde047',
      glow: 'rgba(234, 179, 8, 0.15)',
      glowSm: 'rgba(234, 179, 8, 0.25)',
      icon: 'ri-cake-line',
      title: 'Bakery',
      description: 'Perishable stock tracking with expiry alerts.',
      route: '/bakery'
    },
    {
      color: '#059669', // Emerald
      lightColor: '#34d399',
      glow: 'rgba(5, 150, 105, 0.15)',
      glowSm: 'rgba(5, 150, 105, 0.25)',
      icon: 'ri-shopping-basket-2-line',
      title: 'Supermarket',
      description: 'High-volume billing with barcode-first workflows.',
      route: '/supermarket'
    },
    {
      color: '#8b5cf6', // Violet
      lightColor: '#a78bfa',
      glow: 'rgba(139, 92, 246, 0.15)',
      glowSm: 'rgba(139, 92, 246, 0.25)',
      icon: 'ri-cpu-line',
      title: 'Electrical & Electronics',
      description: 'Serial number and warranty tracking built in.',
      route: '/electronics'
    },
    {
      color: '#0d9488', // Teal
      lightColor: '#2dd4bf',
      glow: 'rgba(13, 148, 136, 0.15)',
      glowSm: 'rgba(13, 148, 136, 0.25)',
      icon: 'ri-capsule-line',
      title: 'Medical Shop',
      description: 'Batch, expiry and schedule-drug compliance.',
      route: '/medical-shop'
    },
    {
      color: '#ec4899', // Pink
      lightColor: '#f472b6',
      glow: 'rgba(236, 72, 153, 0.15)',
      glowSm: 'rgba(236, 72, 153, 0.25)',
      icon: 'ri-smartphone-line',
      title: 'Mobile Store',
      description: 'IMEI tracking and EMI billing support.',
      route: '/mobile-store'
    },
    {
      color: '#a855f7', // Purple
      lightColor: '#c084fc',
      glow: 'rgba(168, 85, 247, 0.15)',
      glowSm: 'rgba(168, 85, 247, 0.25)',
      icon: 'ri-footprint-line',
      title: 'Footwear',
      description: 'Size and style matrix inventory made simple.',
      route: '/footwear'
    },
    {
      color: '#06b6d4', // Cyan
      lightColor: '#22d3ee',
      glow: 'rgba(6, 182, 212, 0.15)',
      glowSm: 'rgba(6, 182, 212, 0.25)',
      icon: 'ri-gift-line',
      title: 'Gift Shop',
      description: 'Combo offers and festive season billing.',
      route: '/gift-shop'
    },
    {
      color: '#6366f1', // Indigo
      lightColor: '#818cf8',
      glow: 'rgba(99, 102, 241, 0.15)',
      glowSm: 'rgba(99, 102, 241, 0.25)',
      icon: 'ri-hammer-line',
      title: 'Hardware',
      description: 'Bulk unit conversions and supplier-linked stock.',
      route: '/hardware'
    },

    // ERP System
    {
      color: '#7c3aed', // Purple
      lightColor: '#a78bfa',
      glow: 'rgba(124, 58, 237, 0.15)',
      glowSm: 'rgba(124, 58, 237, 0.25)',
      icon: 'ri-dashboard-3-line',
      title: 'ERP System',
      description: 'Complete business management with finance, HR, CRM and inventory.',
      route: '/erp-system'
    },

    // IoT Solutions
    {
      color: '#0891b2', // Sky Blue
      lightColor: '#22d3ee',
      glow: 'rgba(8, 145, 178, 0.15)',
      glowSm: 'rgba(8, 145, 178, 0.25)',
      icon: 'ri-router-line',
      title: 'IoT Solutions',
      description: 'Monitor and automate connected devices with real-time insights.',
      route: '/iot-system'
    },

    // Asset Management
    {
      color: '#f97316', // Orange
      lightColor: '#fb923c',
      glow: 'rgba(249, 115, 22, 0.15)',
      glowSm: 'rgba(249, 115, 22, 0.25)',
      icon: 'ri-folder-chart-line',
      title: 'Asset Management',
      description: 'Track assets, depreciation, maintenance and lifecycle efficiently.',
      route: '/asset-management'
    },

    // Room Booking
    {
      color: '#ec4899', // Pink
      lightColor: '#f472b6',
      glow: 'rgba(236, 72, 153, 0.15)',
      glowSm: 'rgba(236, 72, 153, 0.25)',
      icon: 'ri-hotel-bed-line',
      title: 'Room Booking  Management',
      description: 'Manage reservations, room availability and customer bookings.',
      route: '/room-book-management'
    },

    // Visitor Management
    {
      color: '#14b8a6', // Teal
      lightColor: '#5eead4',
      glow: 'rgba(20, 184, 166, 0.15)',
      glowSm: 'rgba(20, 184, 166, 0.25)',
      icon: 'ri-user-star-line',
      title: 'Visitor Management',
      description: 'Digital visitor registration, approvals and secure access control.',
      route: '/visitor-management'
    },

    {
      color: '#0ea5e9', // Sky Blue
      lightColor: '#7dd3fc',
      glow: 'rgba(14, 165, 233, 0.15)',
      glowSm: 'rgba(14, 165, 233, 0.25)',
      icon: 'ri-parking-box-line',
      title: 'Parking Management',
      description: 'Manage vehicle entry, parking slots, passes and automated billing.',
      route: '/parking-management'
    },

  ];

  ngAfterViewInit(): void {
    const swiperEl: any = this.swiper.nativeElement;
    Object.assign(swiperEl, {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      grabCursor: true,

      autoplay: {
        delay: 1000,
        disableOnInteraction: false
      },

      /* ADD THIS */
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: false,
        sensitivity: 1
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });

    // Initialize Swiper Web Component
    swiperEl.initialize();

    // Pause Autoplay on Hover
    swiperEl.addEventListener('mouseenter', () => {
      if (swiperEl.swiper && swiperEl.swiper.autoplay) {
        swiperEl.swiper.autoplay.stop();
      }
    });
    // MouseEvent
    swiperEl.addEventListener(
      'wheel',
      (event: WheelEvent) => {

        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {

          event.preventDefault();

          const count = Math.ceil(Math.abs(event.deltaX) / 40);

          if (event.deltaX > 0) {

            for (let i = 0; i < count; i++) {
              swiperEl.swiper.slideNext(250);
            }

          } else {

            for (let i = 0; i < count; i++) {
              swiperEl.swiper.slidePrev(250);
            }

          }

        }

      },
      { passive: false }
    );
    swiperEl.addEventListener('mouseleave', () => {
      if (swiperEl.swiper && swiperEl.swiper.autoplay) {
        swiperEl.swiper.autoplay.start();
      }
    });
  }

  // Navigation Button Handlers
  slidePrev(): void {
    const swiperEl: any = this.swiper.nativeElement;
    if (swiperEl.swiper) {
      swiperEl.swiper.slidePrev();
    }
  }

  slideNext(): void {
    const swiperEl: any = this.swiper.nativeElement;
    if (swiperEl.swiper) {
      swiperEl.swiper.slideNext();
    }
  }
}