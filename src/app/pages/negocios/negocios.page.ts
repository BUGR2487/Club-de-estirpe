import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-negocios',
  templateUrl: './negocios.page.html',
  styleUrls: ['./negocios.page.scss'],
})
export class NegociosPage implements OnInit {

  slides_inversiones: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/salud.svg',
      titulo: 'Salud'
    },
    {
      img: '/assets/slides-images/belleza.svg',
      titulo: 'Belleza'
    },
    {
      img: '/assets/slides-images/deportes.svg',
      titulo: 'Deportes'
    },
    {
      img: '/assets/slides-images/moda.svg',
      titulo: 'Moda'
    },
    {
      img: '/assets/slides-images/marketing.svg',
      titulo: 'Marketing'
    },
    {
      img: '/assets/slides-images/alimentos.svg',
      titulo: 'Alimentos'
    },
    {
      img: '/assets/slides-images/oficio.svg',
      titulo: 'Oficio'
    },
    {
      img: '/assets/slides-images/escuela.svg',
      titulo: 'Escuela'
    }
  ];

  slides_negocios: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/negocios_entre_miembros.svg',
      titulo: 'Genera nuevos negocios entre miembros de la red de empresas'
    },
    {
      img: '/assets/slides-images/promociones_cruzadas.svg',
      titulo: 'Aprovecha y genera promociones cruzadas para atraer nuevos clientes'
    },
    {
      img: '/assets/slides-images/colaboraciones_conjuntas.svg',
      titulo: 'Crea y disfruta de colaboraciones conjuntas con empresas afines a tu negocio'
    },
    {
      img: '/assets/slides-images/credito.svg',
      titulo: 'Obtén créditos empresariales con costos por debajo de los financiamientos tradicionales'
    },
    {
      img: '/assets/slides-images/recomendaciones.svg',
      titulo: 'Recibe un mayor número de referencias y recomendaciones que harán crecer tu negocio'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
