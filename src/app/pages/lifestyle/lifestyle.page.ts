import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.page.html',
  styleUrls: ['./lifestyle.page.scss'],
})
export class LifestylePage implements OnInit {

  slides_lifestyle_eventos: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/aniversarios.svg',
      titulo: 'Anivesarios'
    },
    {
      img: '/assets/slides-images/posadas.svg',
      titulo: 'Posadas'
    },
    {
      img: '/assets/slides-images/cumpleanos.svg',
      titulo: 'Cumpleaños'
    }
  ];

  slides_lifestyle_premios: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/viajes.svg',
      titulo: 'Viajes'
    },
    {
      img: '/assets/slides-images/accesorios.svg',
      titulo: 'Accesorios'
    },
    {
      img: '/assets/slides-images/cenas_exclusivas.svg',
      titulo: 'Cenas exclusivas'
    },
    {
      img: '/assets/slides-images/gadgets.svg',
      titulo: 'Gadgets'
    }
  ];

  slides_lifestyle_preferencias: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/restaurantes.svg',
      titulo: 'Restaurantes'
    },
    {
      img: '/assets/slides-images/gimnasio.svg',
      titulo: 'Gimnasios'
    },
    {
      img: '/assets/slides-images/bares.svg',
      titulo: 'Bares'
    },
    {
      img: '/assets/slides-images/cines.svg',
      titulo: 'Cines'
    },
    {
      img: '/assets/slides-images/teatros.svg',
      titulo: 'Teatros'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
