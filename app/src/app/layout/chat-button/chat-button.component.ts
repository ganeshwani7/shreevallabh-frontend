import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CONTACT_INFO } from '../../config/site.config';

@Component({
  selector: 'app-chat-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  templateUrl: './chat-button.component.html',
  styleUrl: './chat-button.component.scss'
})
export class ChatButtonComponent {
  isOpen = false;
  contactInfo = CONTACT_INFO;
  
  formData = {
    name: '',
    phone: '',
    message: ''
  };

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (this.formData.name && this.formData.phone && this.formData.message) {
      // Create WhatsApp message
      const message = `Name: ${this.formData.name}%0APhone: ${this.formData.phone}%0AMessage: ${this.formData.message}`;
      const whatsappUrl = `https://wa.me/919689324004?text=${message}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      this.formData = { name: '', phone: '', message: '' };
      this.isOpen = false;
    }
  }
}
