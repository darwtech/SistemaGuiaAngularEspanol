import { Component, inject } from '@angular/core';
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
export class DetallesComponent 
{
  route:ActivatedRoute=inject(ActivatedRoute);
  oservice=inject(CasaService);
  clocalizacion: casa | undefined;
  constructor()
  {
    const codigo=parseInt(this.route.snapshot.params['id'],10);
    this.clocalizacion= this.oservice.getCasaId(codigo);
  }
}
