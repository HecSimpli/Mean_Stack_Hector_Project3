import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from './services/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  text: string = "";

  constructor(private http: HttpClient, public chat: ChatService) { }

  post() {
    console.log('post ok', this.text);
    this.http.post('http://localhost:3000/api/text', this.text);
  }





}


