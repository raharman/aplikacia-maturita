import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage{

  darkMode: boolean = false;

  constructor() { 
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }


  change(){
    this.darkMode = !this.darkMode;

    document.body.classList.toggle( 'dark' );
  }
  

}
