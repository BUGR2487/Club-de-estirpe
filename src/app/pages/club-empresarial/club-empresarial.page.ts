import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-empresarial',
  templateUrl: './club-empresarial.page.html',
  styleUrls: ['./club-empresarial.page.scss'],
})
export class ClubEmpresarialPage implements OnInit {

  slides_club_empresarial: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/capacitacion_club_empresarial.svg',
      titulo: 'Capacitación'
    },
    {
      img: '/assets/slides-images/soporte_para_empresas.svg',
      titulo: 'Soporte para empresas'
    },
    {
      img: '/assets/slides-images/inversiones_club_empresarial.svg',
      titulo: 'Inversiones'
    },
    {
      img: '/assets/slides-images/eventos.svg',
      titulo: 'Eventos'
    },
    {
      img: '/assets/slides-images/coworking_club_empresarial.svg',
      titulo: 'Coworking'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
