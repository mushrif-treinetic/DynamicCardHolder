import { Component, ViewChild, ViewContainerRef, Injector } from '@angular/core';
import { WelcomeCardComponent } from './cards/welcome-card/welcome-card.component';
import { AlertCardComponent } from './cards/alert-card/alert-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('cardHost', { read: ViewContainerRef }) container!: ViewContainerRef;

    constructor(private injector: Injector) {}

    load(type: string) {
      this.container.clear();

      if (type === 'welcome') {
        const compRef = this.container.createComponent(WelcomeCardComponent, { injector: this.injector });
        compRef.instance.username = 'Mushrif';
      } else if (type === 'alert') {
        const compRef = this.container.createComponent(AlertCardComponent, { injector: this.injector });
        compRef.instance.dismiss.subscribe(() => alert('Alert dismissed!'));
      }
    }
}
