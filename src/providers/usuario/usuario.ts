import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class UsuarioProvider {

  constructor(private afDB: AngularFirestore) {
    
  }

  verificaUsuario (clave: string) {

    clave = clave.toLocaleLowerCase();
    return new Promise( (resolve, reject) => {
      

      this.afDB.doc(`/usuarios/${ clave }`)
          .valueChanges().subscribe( data => {


           console.log(data);

            
          })
    });
  }

}
