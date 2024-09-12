import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: string = "";
  email: string ="";
  menssagem: string ="";
  secretKey: string ="";
  encryptedAll: string ="";

  constructor() {}

  encryptData() {

    const data = JSON.stringify({ nome: this.nome, email: this.email, menssagem: this.menssagem });


    this.encryptedAll = CryptoJS.AES.encrypt(data, this.secretKey).toString();


    localStorage.setItem('encryptedData', this.encryptedAll);

    console.log('Dados criptografados:', this.encryptedAll);
  }

  abrirTela() {

    window.location.href = "/descript";
  }
}
