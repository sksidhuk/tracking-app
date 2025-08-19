import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    constructor() { }

    private messageSubject = new BehaviorSubject<{ type: 'success' | 'danger'; text: string } | null>(null);
    _message = this.messageSubject.asObservable();

    showMessage(type: 'success' | 'danger', text: string) {
        this.messageSubject.next({ type, text });
        this.autoClear();
    }

    clear() {
        this.messageSubject.next(null);
    }

    autoClear() {
        setTimeout(() => this.clear(), 2000);
    }

}
