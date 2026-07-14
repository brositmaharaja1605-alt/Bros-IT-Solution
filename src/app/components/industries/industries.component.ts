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
      title: 'Electronics',
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
    }
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