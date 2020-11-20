import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-contacto',
  templateUrl: './informacion-contacto.page.html',
  styleUrls: ['./informacion-contacto.page.scss'],
})
export class InformacionContactoPage implements OnInit {

  cards_informacion: { icon: string, informacion: string, redirectTo: string }[] = [
    {
      icon: 'call-outline',
      informacion: '33 - 2254 - 9095',
      redirectTo: "tel:+3322549095"
    },
    {
      icon: 'mail-outline',
      informacion: 'admin@clubdeestirpe.com',
      redirectTo: "/formulario-contacto"
    },
    {
      icon: 'desktop-outline',
      informacion: 'http://clubdeestirpe.com/',
      redirectTo: "http://clubdeestirpe.com/"
    },
    {
      icon: 'location-outline',
      informacion: 'Calle Loma Bonita 253, Zalatitán, Tonalá, Jalisco',
      redirectTo: "https://goo.gl/maps/aKXBg4tVLQMF8U5eA"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
