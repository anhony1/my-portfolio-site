import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteHeaderComponent } from './header/site-header/site-header.component';
import { MainBodyComponent } from './main-body/main-body/main-body.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PortPageComponent } from './pages/port-page/port-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogItemComponent } from './pages/blog-page/blog-item/blog-item.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page/blog-post-page.component';
import { MarkedPipe } from './pipes/marked/marked.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    MainBodyComponent,
    AboutPageComponent,
    PortPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    BlogItemComponent,
    BlogPostPageComponent,
    MarkedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
