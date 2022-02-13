import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{

  constructor() { }

  onToggleColorTheme( event ){
    if(event.detail.checked){
      document.body.setAttribute("color-theme", "dark");
    }
    else{
      document.body.setAttribute("color-theme", "light");
    }
  }

  onToggleNotifications( event ){
    if(event.detail.checked){
      /* zapnute notifikacie */
    }
    else{
      /* vypnute notifikacie */
    }
  }

}
