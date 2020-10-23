import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.page.html',
  styleUrls: ['./formulario-contacto.page.scss'],
})
export class FormularioContactoPage implements OnInit {

  usuario = {
    nombre: '',
    telefono: '',
    email: '',
    pregunta: ''
  }

  constructor(private emailComposer: EmailComposer, public toastController: ToastController) { }

  ngOnInit() {
  }

  sendEmail() {
    let email = {
      to: 'admin@clubdeestirpe.com',
      subject: '¡Se genero una pregunta desde la aplicación!',
      body: 'Nombre: ' + this.usuario.nombre + '<br> Teléfono: ' + this.usuario.telefono + '<br> Correo Electrónico: ' + this.usuario.email + '<br> Pregunta: ' + this.usuario.pregunta + ' <br> ',
      isHtml: true
    };

    this.emailComposer.open(email);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Te contactaremos a la brevedad :D',
      duration: 2000
    });
    toast.present();
  }
  
}
