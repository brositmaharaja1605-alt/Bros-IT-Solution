import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  services = [
    {
      title: 'Web Development',
      icon: 'ri-code-s-slash-line',
      color: '#2563EB',
      description: 'Modern, responsive websites and web applications tailored to your business needs.'
    },
    {
      title: 'Mobile App Development',
      icon: 'ri-smartphone-line',
      color: '#10B981',
      description: 'Native and cross-platform mobile apps for Android, iOS and more.'
    },
    {
      title: 'Windows Software',
      icon: 'ri-computer-line',
      color: '#7C3AED',
      description: 'Powerful desktop applications built for performance and reliability.'
    },
    {
      title: 'ERP Solutions',
      icon: 'ri-building-4-line',
      color: '#F97316',
      description: 'Complete ERP systems to manage your entire business efficiently.'
    },
    {
      title: 'Billing & Inventory',
      icon: 'ri-file-list-3-line',
      color: '#F43F5E',
      description: 'GST billing, inventory, barcode and stock management solutions.'
    },
    {
      title: 'Barcode & RFID',
      icon: 'ri-qr-code-line',
      color: '#14B8A6',
      description: 'Barcode printing, RFID solutions and inventory automation.'
    },
    {
      title: 'IoT Solutions',
      icon: 'ri-cpu-line',
      color: '#F59E0B',
      description: 'Smart IoT solutions for automation, monitoring and real-time tracking.'
    },
    {
      title: 'POS Hardware',
      icon: 'ri-printer-line',
      color: '#EC4899',
      description: 'POS hardware, installation and complete technical support.'
    },
    {
      title: 'AMC & Support',
      icon: 'ri-customer-service-2-line',
      color: '#3B82F6',
      description: 'Annual maintenance, remote support and on-site technical assistance.'
    }
  ];

  whyChooseItems = [
    {
      icon: 'ri-team-line',
      color: '#2563EB',
      title: 'Expert Team',
      description: 'Skilled professionals with rich industry experience.'
    },
    {
      icon: 'ri-rocket-2-line',
      color: '#10B981',
      title: 'On-Time Delivery',
      description: 'We deliver projects on time with best quality.'
    },
    {
      icon: 'ri-time-line',
      color: '#7C3AED',
      title: '24/7 Support',
      description: 'Round-the-clock support for your business.'
    },
    {
      icon: 'ri-award-line',
      color: '#F97316',
      title: 'Customer Satisfaction',
      description: 'Our success is measured by happy customers.'
    }
  ];

  processSteps = [
    {
      step: '01',
      icon: 'ri-file-list-3-line',
      color: '#2563EB',
      title: 'Requirement',
      description: 'We understand your business requirements.'
    },
    {
      step: '02',
      icon: 'ri-draft-line',
      color: '#10B981',
      title: 'Planning',
      description: 'We plan the project with a clear strategy.'
    },
    {
      step: '03',
      icon: 'ri-pencil-ruler-2-line',
      color: '#7C3AED',
      title: 'Design',
      description: 'UI/UX design and prototyping.'
    },
    {
      step: '04',
      icon: 'ri-code-s-slash-line',
      color: '#F97316',
      title: 'Development',
      description: 'We build the product with clean code.'
    },
    {
      step: '05',
      icon: 'ri-bug-line',
      color: '#F43F5E',
      title: 'Testing',
      description: 'Quality testing for bug-free performance.'
    },
    {
      step: '06',
      icon: 'ri-rocket-line',
      color: '#14B8A6',
      title: 'Deployment',
      description: 'We deploy and provide support.'
    }
  ];

  stats = [
    { icon: 'ri-send-plane-line', color: '#60A5FA', value: '750+', label: 'Projects Delivered' },
    { icon: 'ri-emotion-happy-line', color: '#FBBF24', value: '100+', label: 'Happy Clients' },
    { icon: 'ri-award-line', color: '#F472B6', value: '10+', label: 'Years Experience' },
    { icon: 'ri-headphone-line', color: '#A78BFA', value: '24/7', label: 'Technical Support' }
  ];

  technologies = [
    { name: 'Angular', label: 'A', color: '#DD0031' },
    { name: '.NET', label: '.NET', color: '#5C2D91' },
    { name: 'C#', label: 'C#', color: '#178600' },
    { name: 'SQL Server', label: 'SQL', color: '#CC2927' },
    { name: 'Flutter', label: 'F', color: '#02569B' },
    { name: 'AWS', label: 'AWS', color: '#FF9900' },
    { name: 'Git', label: 'Git', color: '#F05032' },
    { name: 'HTML5', label: 'H5', color: '#E34F26' },
    { name: 'CSS3', label: 'C3', color: '#1572B6' },
    { name: 'Bootstrap', label: 'B', color: '#7952B3' }
  ];

}