import { Component, OnInit } from '@angular/core';
import { CasaService } from '../../servicios/casa.service';
import { CommonModule } from '@angular/common';
import { casa } from '../../entidades/casa';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {
  clocalizacion: casa | undefined;
  currentImageIndex = 0;

constructor(private casaService: CasaService){}



  ngOnInit(): void {
    this.clocalizacion = this.casaService.getCasaId(0);
  }

  prevImage() {
    if (this.clocalizacion) {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.clocalizacion.foto.length - 1;
      }
    }
  }

  nextImage() {
    if (this.clocalizacion) {
      if (this.currentImageIndex < this.clocalizacion.foto.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
    }

  }


  setImage(index: number) {
    this.currentImageIndex = index;
  }




}
