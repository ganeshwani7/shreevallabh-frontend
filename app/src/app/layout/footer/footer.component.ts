import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { COMPANY_INFO, CONTACT_INFO, FOOTER_SITE_LINKS, FOOTER_EQUIPMENT_LINKS } from '../../config/site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  // Import from config
  companyInfo = COMPANY_INFO;
  contactInfo = CONTACT_INFO;
  siteLinks = FOOTER_SITE_LINKS;
  products = FOOTER_EQUIPMENT_LINKS;
}
