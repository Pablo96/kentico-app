import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { DeliveryClientProvider } from './Providers/delivery-client.provider';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    
  ],
  imports: [
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [DeliveryClientProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
