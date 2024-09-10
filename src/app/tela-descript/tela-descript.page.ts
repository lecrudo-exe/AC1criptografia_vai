import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela-descript',
  templateUrl: './tela-descript.page.html',
  styleUrls: ['./tela-descript.page.scss'],
})
export class TelaDescriptPage implements OnInit {

  nome:any
  email:any
  menssagem:any

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit(){
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome')
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.menssagem = this.activatedRoute.snapshot.paramMap.get('menssagem');
  }

}
