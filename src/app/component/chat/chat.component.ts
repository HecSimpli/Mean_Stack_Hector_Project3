import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  text: string = "";





  constructor(public chat: ChatService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //


  post() {
    console.log('post ok', this.text);

  }

  //
  sendMessage() {
    let messageInfo = {
      text: this.text,
      messageType: 1
    };
    this.chat.sendMessage(messageInfo);
    this.text = "";

  }
}
