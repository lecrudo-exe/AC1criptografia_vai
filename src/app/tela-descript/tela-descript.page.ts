import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-descript',
  templateUrl: 'tela-descript.page.html',
  styleUrls: ['tela-descript.page.scss'],
})
export class DescriptPage {
  secretKey: string ="";
  encryptedData: string ="";
  nome: string ="";
  email: string ="";
  menssagem: string ="";
  dadosDescriptografados: boolean = false;

  constructor() {

    this.encryptedData = localStorage.getItem('encryptedData') || '';
  }

  descriptografar() {
    try {

      const bytes = CryptoJS.AES.decrypt(this.encryptedData, this.secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));


      this.nome = decryptedData.nome;
      this.email = decryptedData.email;
      this.menssagem = decryptedData.menssagem;
      this.dadosDescriptografados = true;
    } catch (error) {
      console.log('Erro ao descriptografar os dados:', error);
      this.dadosDescriptografados = false;
    }
  }
}
