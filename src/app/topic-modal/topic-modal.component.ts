import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.component.html',
  styleUrls: ['./topic-modal.component.scss'],
})
export class TopicModalComponent {

  constructor(private modalCtrl: ModalController) { }

  async showModal(){
    const modal = await this.modalCtrl.create({
      component: TopicModalComponent
    });

    await modal.present();
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }

}