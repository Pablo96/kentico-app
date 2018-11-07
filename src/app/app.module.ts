import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DeliveryClientProvider } from './Providers/delivery-client.provider';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
