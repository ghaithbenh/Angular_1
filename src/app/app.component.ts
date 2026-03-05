import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ListeFilmsComponent } from "./liste-films/liste-films.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListeFilmsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
