import { Component, EventEmitter, Input, Output } from '@angular/core';
import { casa } from '../../entidades/casa';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  casa: casa = {
    id: 0,
    nombre: '',
    ciudad: '',
    provincia: '',
    foto: [], // Inicializado como un arreglo vacío
    unidades: 0,
    wifi: false,
    lavanderia: false
  };

  closeModal() {
    this.close.emit();
  }

  onSubmit() {
    console.log(this.casa);
    this.closeModal();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      Array.from(input.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.casa.foto.push(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  }

  removeFoto(index: number) {
    this.casa.foto.splice(index, 1);
  }
}
