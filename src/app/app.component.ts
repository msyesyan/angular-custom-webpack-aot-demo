import { Component } from '@angular/core';
import { NgI18nAotService } from '@actra-development-oss/ng-i18n-aot-module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-demo';

  constructor(protected ngI18n: NgI18nAotService) {
    this.ngI18n.setLocale('zh_CN');
    console.log(this.ngI18n);
  }

  setLocale(locale) {
    this.ngI18n.setLocale(locale);
  }
}
