import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides_que_es: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/club_empresarial.svg',
      titulo: 'Club empresarial'
    },
    {
      img: '/assets/slides-images/capacitacion.svg',
      titulo: 'Capacitación'
    },
    {
      img: '/assets/slides-images/lifestyle.svg',
      titulo: 'Lifestyle'
    },
    {
      img: '/assets/slides-images/negocios.svg',
      titulo: 'Negocios'
    },
    {
      img: '/assets/slides-images/emprendimiento.svg',
      titulo: 'Emprendimiento'
    },
    {
      img: '/assets/slides-images/inversiones.svg',
      titulo: 'Inversiones'
    },
    {
      img: '/assets/slides-images/propulsor_de_negocios.svg',
      titulo: 'Propulsor de negocios'
    },
    {
      img: '/assets/slides-images/networking.svg',
      titulo: 'Networking'
    },
    {
      img: '/assets/slides-images/coworking.svg',
      titulo: 'Coworking'
    }
  ];

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

  slides_lifestyle_eventos: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/aniversarios.svg',
      titulo: 'Anivesarios'
    },
    {
      img: '/assets/slides-images/posadas.svg',
      titulo: 'Posadas'
    },
    {
      img: '/assets/slides-images/cumpleanos.svg',
      titulo: 'Cumpleaños'
    }
  ];

  slides_lifestyle_premios: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/viajes.svg',
      titulo: 'Viajes'
    },
    {
      img: '/assets/slides-images/accesorios.svg',
      titulo: 'Accesorios'
    },
    {
      img: '/assets/slides-images/cenas_exclusivas.svg',
      titulo: 'Cenas exclusivas'
    },
    {
      img: '/assets/slides-images/gadgets.svg',
      titulo: 'Gadgets'
    }
  ];

  slides_lifestyle_preferencias: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/restaurantes.svg',
      titulo: 'Restaurantes'
    },
    {
      img: '/assets/slides-images/gimnasio.svg',
      titulo: 'Gimnasio'
    },
    {
      img: '/assets/slides-images/bares.svg',
      titulo: 'Bares'
    },
    {
      img: '/assets/slides-images/cines.svg',
      titulo: 'Cines'
    },
    {
      img: '/assets/slides-images/teatros.svg',
      titulo: 'Teatros'
    }
  ];

  slides_lifestyle_negocios: { img: string, titulo: string }[] = [
    {
      img: '/assets/slides-images/negocios_entre_miembros.svg',
      titulo: 'Negocios entre miembros de la red de empresas'
    },
    {
      img: '/assets/slides-images/promociones_cruzadas.svg',
      titulo: 'Promociones cruzadas'
    },
    {
      img: '/assets/slides-images/colaboraciones_conjuntas.svg',
      titulo: 'Colaboraciones conjuntas'
    },
    {
      img: '/assets/slides-images/credito.svg',
      titulo: 'Crédito'
    },
    {
      img: '/assets/slides-images/recomendaciones.svg',
      titulo: 'Referencias / Recomendaciones'
    }
  ];

  slides_lifestyle_inversiones: { img: string, titulo: string }[] = [
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

  slides_lifestyle_club_empresarial: { img: string, titulo: string }[] = [
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

  constructor() {}

}
