import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.scss'],
})
export class ContactanosComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {}

  routingMain() {
    this.router.navigate(['/formulario-contacto']);
  }

}
