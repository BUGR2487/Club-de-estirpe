import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprendimiento',
  templateUrl: './emprendimiento.page.html',
  styleUrls: ['./emprendimiento.page.scss'],
})
export class EmprendimientoPage implements OnInit {

  slides_emprendimiento: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/emprendimiento_ayuda.svg',
      titulo: 'Siempre tienes un equipo de profesionales para ayudarte a cumplir los objetivos de tu negocio.'
    },
    {
      img: '/assets/slides-images/emprendimiento_ideas.svg',
      titulo: 'En club de estirpe apoyamos a emprendedores a llevar acabo sus ideas de negocio con bases sólidas.'
    },
    {
      img: '/assets/slides-images/emprendimiento_equipo.svg',
      titulo: 'Los ayudamos a entender el contexto empresarial para reducir la curva de aprendizaje y darles mayores posibilidades de éxito a su proyecto.'
    },
    {
      img: '/assets/slides-images/emprendimiento_empresa.svg',
      titulo: 'Nos apoyamos con la estructura de la red de empresas para alcanzar rentabilidad en corto plazo.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
