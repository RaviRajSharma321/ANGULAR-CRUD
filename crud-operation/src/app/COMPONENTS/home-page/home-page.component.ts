import { Component } from '@angular/core';
import { PanelComponent } from "../panel/panel.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SidebarComponent, PanelComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
}
