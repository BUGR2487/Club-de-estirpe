import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  @Input() titulo: string = 'CLUB DE ESTIRPE';

  constructor() { }

  ngOnInit() {}

}
