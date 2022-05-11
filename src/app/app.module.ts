import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './component/chat/chat.component';
import { HttpClientModule } from '@angular/common/http';

import { ChatService } from './services/chat.service';

// import { Injectable } from '@angular/core';

//         @Injectable({
//           providedIn: [ChatService]
//         })

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]

})

export class AppModule { }

