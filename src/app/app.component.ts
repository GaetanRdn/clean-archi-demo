import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>{{ title }}</h1>`,
})
export class AppComponent {
  title = 'clean-archi-demo';
}
