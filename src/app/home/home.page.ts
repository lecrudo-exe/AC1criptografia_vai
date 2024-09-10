import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: string = ""
  email: string = ""
  menssagem: string = ""
  secretKey: string = ""
  encryptedAll: string = ""

  constructor(public router : Router) {}

  abrirTela(){
    this.router.navigateByUrl
    (`/tela-descript/${this.nome}/${this.email}/${this.menssagem}`);
  }

  encrypt(){
    if(this.nome && this.secretKey){
      const encrypted = CryptoJS.AES.encrypt(this.nome, this.secretKey).toString();
      this.encryptedAll = encrypted;
    }
  }
}
