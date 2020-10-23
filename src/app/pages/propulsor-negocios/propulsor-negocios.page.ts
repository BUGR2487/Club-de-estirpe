import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propulsor-negocios',
  templateUrl: './propulsor-negocios.page.html',
  styleUrls: ['./propulsor-negocios.page.scss'],
})
export class PropulsorNegociosPage implements OnInit {

  slides_propulsor_negocios: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/propulsor_negocios_soporte.svg',
      titulo: 'Te damos el soporte que requieres para atender las principales áreas de oportunidad de tu empresa.'
    },
    {
      img: '/assets/slides-images/propulsor_negocios_practicantes.svg',
      titulo: 'Integra practicantes especializados para cada área de tu empresa.'
    },
    {
      img: '/assets/slides-images/propulsor_negocios_financiamiento.svg',
      titulo: 'Obtén financiamiento bajo costo para desarrollar tus proyectos.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
