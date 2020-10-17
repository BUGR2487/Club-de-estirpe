import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.page.html',
  styleUrls: ['./coworking.page.scss'],
})
export class CoworkingPage implements OnInit {

  slides_coworking: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/coworking_lugar_de_trabajo.svg',
      titulo: 'Trabaja en espacios comunes, pensados para emprendedores.'
    },
    {
      img: '/assets/slides-images/coworking_hablar.svg',
      titulo: 'Colabora e interactúa con otros emprendedores como tu para enriquecer tu desarrollo.'
    },
    {
      img: '/assets/slides-images/coworking_cafeteria.svg',
      titulo: 'Siempre tendrás cafe, internet y un espacio comodo para tus citas.'
    },
    {
      img: '/assets/slides-images/coworking_mano_amiga.svg',
      titulo: 'Nadie dijo que emprender fuera fácil, pero nosotros te ayudaremos a que sea más sencillo.'
    }
  ];

  slideOpt = {
    loop: true
  };

  constructor() { }

  ngOnInit() {
  }

}
