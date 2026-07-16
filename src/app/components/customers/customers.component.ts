import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  img: string;
}

@Component({
  selector:'app-customers',
  standalone:true,
  imports:[
    CommonModule,
    NavbarComponent
  ],
  templateUrl:'./customers.component.html',
  styleUrls:['./customers.component.scss'],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CustomersComponent {

testimonials: Testimonial[] = [

  {
name:'Lakshmi Devi',
role:'Owner, Jewellery Shop',
text:'The software is simple, secure and perfect for our jewellery business. Customer support is outstanding.',
img:'assets/img/customers/customer1.png'
},

{
name:'Ramesh Kumar',
role:'Owner, City Supermarket',
text:'Bros IT Solutions transformed our billing process. The POS software is fast, reliable, and easy for our staff to use every day.',
img:'assets/img/customers/customer2.png'
},

{
name:'Arun Kumar',
role:'Owner, Grocery Store',
text:'Excellent billing software with cloud backup and barcode support. Highly recommended.',
img:'assets/img/customers/customer3.png'
},

{
name:'Suresh Kumar',
role:'Owner, Restaurant',
text:'Restaurant billing is now much faster. Daily reports and sales tracking save us a lot of time.',
img:'assets/img/customers/customer4.png'
},

{
name:'Priya Shah',
role:'Owner, Beauty & Cosmetics',
text:'Inventory management and GST billing have become much easier after using Bros IT Solutions software.',
img:'assets/img/customers/customer5.png'
},

{
name:'Keerthana',
role:'Owner, Mobile Shop',
text:'Bros IT Solutions provided an excellent POS system with barcode billing and inventory management. Our daily operations are now much smoother.',
img:'assets/img/customers/customer6.png'
}

];

}