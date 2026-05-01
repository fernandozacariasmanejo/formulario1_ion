//import { Component, Input } from '@angular/core';

//@Component({
  //selector: 'app-explore-container',
  //templateUrl: './explore-container.component.html',
  //styleUrls: ['./explore-container.component.scss'],
//})
//export class ExploreContainerComponent {
  //@Input() name?: string;
//}

import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class ExploreContainerComponent {

  nome = '';
  email = '';
  telefone = '';
  genero = '';

  esporte = false;
  musica = false;
  tecnologia = false;

  termos = false;

  constructor(private toastController: ToastController) {}

  async salvar() {
    if (!this.termos) {
      this.mostrarMensagem("Você deve aceitar os termos!");
      return;
    }

    this.mostrarMensagem("Dados salvos com sucesso!");
  }

  async limpar() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.genero = '';

    this.esporte = false;
    this.musica = false;
    this.tecnologia = false;

    this.termos = false;

    this.mostrarMensagem("Formulário limpo!");
  }

  async mostrarMensagem(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}