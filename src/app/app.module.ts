import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DeliveryClientProvider } from './services/kentico-deliver-client.provider';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
