import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import { MobileStoreComponent } from './components/industries/websites/mobile-store/mobile-store.component';
import { RetailStoreComponent } from './components/industries/websites/retail-store/retail-store.component';
import { JewelleryShopComponent } from './components/industries/websites/jewellery-shop/jewellery-shop.component';
import { RestaurantPosComponent } from './components/industries/websites/restaurant-pos/restaurant-pos.component';
import { TextileShopComponent } from './components/industries/websites/textile-shop/textile-shop.component';
import { BakeryComponent } from './components/industries/websites/bakery/bakery.component';
import { SupermarketComponent } from './components/industries/websites/supermarket/supermarket.component';
import { ElectronicsComponent } from './components/industries/websites/electronics/electronics.component';
import { MedicalShopComponent } from './components/industries/websites/medical-shop/medical-shop.component';
import { FootwearComponent } from './components/industries/websites/footwear/footwear.component';
import { GiftShopComponent } from './components/industries/websites/gift-shop/gift-shop.component';
import { HardwareComponent } from './components/industries/websites/hardware/hardware.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },

  { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },

  { path: 'about', loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent) },

  { path: 'contact', loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent) },

  { path: 'retail-store', component: RetailStoreComponent },

  { path: 'jewellery-shop', component: JewelleryShopComponent },

  { path: 'restaurant-pos', component: RestaurantPosComponent },

  { path: 'textile-shop', component: TextileShopComponent },

  { path: 'bakery', component: BakeryComponent },

  { path: 'supermarket', component: SupermarketComponent },

  { path: 'electronics', component: ElectronicsComponent },

  { path: 'medical-shop', component: MedicalShopComponent },

  { path: 'mobile-store', component: MobileStoreComponent },

  { path: 'footwear', component: FootwearComponent },

  { path: 'gift-shop', component: GiftShopComponent },

  { path: 'hardware', component: HardwareComponent }

];