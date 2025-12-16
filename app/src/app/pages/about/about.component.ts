import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { icon: 'emoji_events', title: 'Mission', description: 'Our mission is to be leaders in providing the best & most innovative products in order to generate the combined solutions for agriculture, preserving the environment.' },
    { icon: 'visibility', title: 'Vision', description: 'Our vision is to become a company that promotes the organization of rural entrepreneurs, with the purpose to make them more competitive in the market & to face global competition.' },
    { icon: 'verified', title: 'Our Approach', description: 'Our approach is only providing premium range of Agriculture Equipment to customers, like branded Blowers unit in 600 Litre capacity that is high quality & long lasting.' }
  ];

  whyChooseUs = [
    'Team of experienced professionals',
    'Quality-approved products',
    'Ability to meet bulk requirements',
    'Timely delivery of consignments'
  ];
}
