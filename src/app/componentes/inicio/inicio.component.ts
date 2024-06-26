import { Component,inject } from '@angular/core';
import { LocalizacionCasaComponent } from '../localizacion-casa/localizacion-casa.component';
import { CasaService } from '../../servicios/casa.service';
import { casa } from '../../entidades/casa';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from '../buscar/buscar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,LocalizacionCasaComponent,BuscarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
    Lista:casa[]=[];
    oservice:CasaService=inject(CasaService);
    constructor()
    {
      this.Lista=this.oservice.getLista();


    }
}
