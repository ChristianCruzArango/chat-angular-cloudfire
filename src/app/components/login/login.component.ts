import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public chatService:ChatService) { }

  ngOnInit() {
  }


  ingresar(pagina:string){
    console.log(pagina);

    this.chatService.login(pagina);

  }

}
