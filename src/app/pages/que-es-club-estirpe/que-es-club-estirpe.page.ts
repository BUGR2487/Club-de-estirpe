import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que-es-club-estirpe',
  templateUrl: './que-es-club-estirpe.page.html',
  styleUrls: ['./que-es-club-estirpe.page.scss'],
})
export class QueEsClubEstirpePage implements OnInit {

  slides_que_es: { img: string, titulo: string, redirectTo: string }[] = [
    {
      img: '/assets/slides-images/club_empresarial.svg',
      titulo: 'Club empresarial',
      redirectTo: "/club-empresarial"
    },
    {
      img: '/assets/slides-images/inversiones.svg',
      titulo: 'Inversiones',
      redirectTo: "/inversiones"
    },
    {
      img: '/assets/slides-images/negocios.svg',
      titulo: 'Negocios',
      redirectTo: "/negocios"
    },
    {
      img: '/assets/slides-images/emprendimiento.svg',
      titulo: 'Emprendimiento',
      redirectTo: "/emprendimiento"
    },
    {
      img: '/assets/slides-images/propulsor_de_negocios.svg',
      titulo: 'Propulsor de negocios',
      redirectTo: "/propulsor-negocios"
    },
    {
      img: '/assets/slides-images/capacitacion.svg',
      titulo: 'Capacitación',
      redirectTo: "/capacitacion"
    },
    {
      img: '/assets/slides-images/networking.svg',
      titulo: 'Networking',
      redirectTo: "/networking"
    },
    {
      img: '/assets/slides-images/coworking.svg',
      titulo: 'Coworking',
      redirectTo: "/coworking"
    },
    {
      img: '/assets/slides-images/lifestyle.svg',
      titulo: 'Lifestyle',
      redirectTo: "/lifestyle"
    }
  ];

  slides_textos: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/que_es_proyecto.svg',
      titulo: 'Si eres emprendedor y te gustaría llevar acabo tu proyecto o mejorarlo, en club de estirpe puedes ingresar tu proyecto para que la comunidad emprendedora te apoye a financiarlo a costo cero o a costos por debajo de los financiamientos tradicionales.'
    },
    {
      img: '/assets/slides-images/que_es_negocios.svg',
      titulo: 'Si te gustan los negocios, puedes visualizar proyectos de diferentes industrias, analizarlos e invertir en ellos para volverte socio. Además de disfrutar de un club diseñado para empresarios y emprendedores con beneficios que te van a encantar.'
    },
    {
      img: '/assets/slides-images/que_es_ventas.svg',
      titulo: 'Si eres una empresa establecida, puedes integrar tu negocio a la red de empresas de la plataforma y generar mayores ventas y aumentar la exposición de tu negocio, además de acceder a créditos con costos preferenciales.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
