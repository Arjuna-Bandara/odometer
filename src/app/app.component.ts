import { Component } from '@angular/core';
import { theme } from 'admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @theme({
//   selector:'app-theme',
//   templateUrl:'./app.index.html'
// })

export class AppComponent {
  title = 'Odometer';
  name = 'test';

  
}
