import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.page.html',
  styleUrls: ['./capacitacion.page.scss'],
})
export class CapacitacionPage implements OnInit {

  slides_capacitacion: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/ventas.svg',
      titulo: 'Ventas'
    },
    {
      img: '/assets/slides-images/administracion.svg',
      titulo: 'Administración'
    },
    {
      img: '/assets/slides-images/recursos_humanos.svg',
      titulo: 'Recursos humanos'
    },
    {
      img: '/assets/slides-images/finanzas.svg',
      titulo: 'Finanzas'
    },
    {
      img: '/assets/slides-images/mercadotecnia.svg',
      titulo: 'Mercadotecnia'
    }
  ];

  slides_capacitacion_textos: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/capacitacion_mentorias.svg',
      titulo: 'Tenemos mentorías personalizadas basadas en la cultura organizacional de club de estirpe para mejorar aspectos generales de tu empresa.'
    },
    {
      img: '/assets/slides-images/capacitacion_visitas.svg',
      titulo: 'Realizamos visitas a empresas ejemplares para observar sus procesos, conocer su trayectoria y tratar de emular los aspectos destacados y compatibles con cada empresa.'
    },
    {
      img: '/assets/slides-images/capacitacion_conferencia.svg',
      titulo: 'Realizamos conferencias con ponentes profesionales o con representantes de casos de éxito en las diferentes industrias.'
    },
    {
      img: '/assets/slides-images/capacitacion_universidad.svg',
      titulo: 'Se genera contenido a partir de distintas fuentes, principalmente de universidades y estudiantes para subirlo a una plataforma de aprendizaje en línea en el que tendrán acceso los miembros del club.'
    },
    {
      img: '/assets/slides-images/capacitacion_otros_emprendedores.svg',
      titulo: 'Se programarán visitas de integración grupal en las empresas de la red para mejorar las áreas de oportunidad de los colaboradores de la empresa de la red.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
