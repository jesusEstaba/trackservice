import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketProvider {
  private socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io('https://track-backend.now.sh');
  }

  // EMITTER
  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  // HANDLER
  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('message', msg => {
        observer.next(msg);
      });
    });
  }
}
