import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor(private router: Router){}

  redirecionar(){
    this.router.navigate(['home']);
    this.router.navigate(['sobre']);
    this.router.navigate(['habilidade']);
    this.router.navigate(['formacao']);
  }
}
