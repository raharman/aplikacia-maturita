import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TopicModalComponent } from '../topic-modal/topic-modal.component';

@Component({
  selector: 'app-maturita-content',
  templateUrl: './maturita-content.page.html',
  styleUrls: ['./maturita-content.page.scss'],
})
export class MaturitaContentPage {

  constructor(private modalCtrl: ModalController) {}

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: TopicModalComponent
    });

    await modal.present();
  }
}
