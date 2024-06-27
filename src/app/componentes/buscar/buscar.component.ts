import { Component } from '@angular/core';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [FormModalComponent,FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  isModalOpen = false;

  openModal() {
    console.log('Opening modal');
    this.isModalOpen = true;
  }

  closeModal() {
    console.log('Closing modal');
    this.isModalOpen = false;
  }
}
