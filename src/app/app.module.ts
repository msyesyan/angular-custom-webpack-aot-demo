import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgI18nAotModule } from '@actra-development-oss/ng-i18n-aot-module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgI18nAotModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
