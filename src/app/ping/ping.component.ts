import { HttpClient } from '@angular/common/http';

export class AppComponent {
  constructor(public http: HttpClient) {}

  ping() {
    this.http
      .get('http://example.com/api/things')
      .subscribe(data => console.log(data), err => console.log(err));
  }
}