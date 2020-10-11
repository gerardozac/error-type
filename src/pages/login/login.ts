import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';






@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              public LoadingCtrl: LoadingController,
              public _usuarioProv: UsuarioProvider) {
  }

  ionViewDidLoad() {
    
    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }

  mostrarInput(){

   this.alertCtrl.create({

    title: 'Ingresar Usuario',
    inputs: [{
      name: 'username',
      placeholder: 'Username' 
    }],
    buttons: [{
      text: 'Cancelar',
      role: 'cancel'
    },{
      text: 'Ingresar',
      handler: data => {
       
        this.verificarUsuario( data.username )
      }
    }]
   }).present();

  }

  verificarUsuario( clave: string ) {

    let loading = this.LoadingCtrl.create({
      content: 'Verificando'
    });

    loading.present();

   this._usuarioProv.verificaUsuario( clave ).then();

    setTimeout(() => {
      loading.dismiss();
    }, 3000);

  }


}
