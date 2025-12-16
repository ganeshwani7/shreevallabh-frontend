import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = [
    { icon: 'location_on', title: 'Address', content: 'Shop No. 02, Alsana Complex, Saikheda Chowfuli, Ozer (Mig), Tal. Niphad, Dist. Nashik, Maharashtra, India - 422206' },
    { icon: 'phone', title: 'Phone', content: '+91-9689324004' },
    { icon: 'email', title: 'Email', content: 'shreevallabh75@gmail.com' }
  ];
}
