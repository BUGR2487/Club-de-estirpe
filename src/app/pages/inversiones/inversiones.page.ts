import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inversiones',
  templateUrl: './inversiones.page.html',
  styleUrls: ['./inversiones.page.scss'],
})
export class InversionesPage implements OnInit {

  slides_textos_inversiones: { img: string, texto: string }[] = [
    {
      img: '/assets/slides-images/inversiones_invertir.svg',
      texto: 'Invierte pequeñas cantidades en negocios tradicionales, no sin antes conocer al emprendedor, su idea de negocio y sus cualidades para llevar a cabo el proyecto.'
    },
    {
      img: '/assets/slides-images/inversiones_experiencia.svg',
      texto: 'Vive la experiencia de invertir y visitar los negocios de los que eres dueño mientras tu dinero trabaja a tu favor.'
    },
    {
      img: '/assets/slides-images/inversiones_exito.svg',
      texto: 'Invierte en proyectos pre-calificados con altas probabilidades de éxito.'
    },
    {
      img: '/assets/slides-images/inversiones_emprendedor.svg',
      texto: 'No importa si quieres invertir cientos o miles de pesos, siempre hay un emprendedor esperando tu apoyo.'
    },
    {
      img: '/assets/slides-images/inversiones_casa.svg',
      texto: '¡Todo sin salir de casa!'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
