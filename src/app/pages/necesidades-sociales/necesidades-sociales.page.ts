import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-necesidades-sociales',
  templateUrl: './necesidades-sociales.page.html',
  styleUrls: ['./necesidades-sociales.page.scss'],
})
export class NecesidadesSocialesPage implements OnInit {

  slides_responsabilidad: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/responsabilidad_oportunidad.svg',
      titulo: 'Falta de oportunidades para integración de los jóvenes recién egresados de la universidad al campo laboral en trabajos dignos y correspondientes a sus habilidades y áreas de estudio.'
    },
    {
      img: '/assets/slides-images/responsabilidad_crecimiento.svg',
      titulo: 'Falta de bases sólidas para el desarrollo de emprendedores y PyMES en cuestión financiera y de contexto empresarial.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
