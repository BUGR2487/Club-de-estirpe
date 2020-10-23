import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  slides_faq: { img: string, pregunta: string, respuesta: string }[] = [
    {
      img: '/assets/slides-images/faq_web.svg',
      pregunta: '¿Cómo me integro a la plataforma?',
      respuesta: 'Regístrate a través de nuestra aplicación o sitio web y comienza a ser parte de esta nueva tendencia de negocios.'
    },
    {
      img: '/assets/slides-images/faq_proyecto.svg',
      pregunta: '¿Cómo registro mi proyecto?',
      respuesta: 'Regístrate como usuario y llena el formulario, nuestro equipo analizará tu proyecto y se pondrá en contacto contigo. '
    },
    {
      img: '/assets/slides-images/faq_registro.svg',
      pregunta: '¿Cómo registro mi empresa a la red?',
      respuesta: 'Regístrate como usuario y llena el formulario, nuestro equipo confirmará tus datos y en breve tendrás la aprobación de tu perfil dentro de la red.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
