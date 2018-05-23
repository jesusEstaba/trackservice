import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketProvider } from '../../providers/socket/socket';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SocketProvider]
})

export class HomePage
{
  public msgInput: string = 'lorem ipsum';
  public realmessage:any = 'nothing';
  
  constructor(
    public navCtrl: NavController, 
    private socket: SocketProvider
  ) {
    this.ngOnInit();
    this.sendButtonClick();
  }

  ngOnInit() {
    this.socket.onNewMessage().subscribe(msg => {
      console.log('got a msg: ' + msg);
    
      this.realmessage = msg;
    });
  }

  sendButtonClick() {
    this.socket.sendMessage(this.msgInput);
  }
}
