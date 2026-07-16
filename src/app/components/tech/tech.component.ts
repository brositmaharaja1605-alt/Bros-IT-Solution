import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.css'
})
export class TechComponent {

  technologies = [

    {
      name: 'Angular',
      icon: 'ri-angularjs-fill',
      color: '#DD0031',
      percentage: 98
    },

    {
      name: 'Flutter',
      icon: 'ri-smartphone-fill',
      color: '#499A13',
      percentage: 95
    },
    {
      name: 'Git',
      icon: 'ri-git-branch-fill',
      color: '#F05032',
      percentage: 98
    },
    {
      name: '.NET',
      icon: 'ri-code-box-fill',
      color: '#512BD4',
      percentage: 97
    },



    {
      name: 'SQL Server',
      icon: 'ri-database-2-fill',
      color: '#1B4EF5',
      percentage: 97
    },

    {
      name: 'C#',
      icon: 'ri-terminal-box-fill',
      color: '#68217A',
      percentage: 96
    },

    {
      name: 'AWS',
      icon: 'ri-cloud-fill',
      color: '#FF9900',
      percentage: 92
    },



    {
      name: 'HTML5',
      icon: 'ri-html5-fill',
      color: '#E34F26',
      percentage: 100
    },

    {
      name: 'CSS3',
      icon: 'ri-css3-fill',
      color: '#1572B6',
      percentage: 99
    },

    {
      name: 'Bootstrap',
      icon: 'ri-bootstrap-fill',
      color: '#FF0052',
      percentage: 98
    }

  ];

}