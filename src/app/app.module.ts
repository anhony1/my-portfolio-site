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
import {HttpClientModule} from "@angular/common/http";
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireStorage, AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import {UploadFormComponent} from "./components/upload-form/upload-form.component";
import {UploadListComponent} from "./components/upload-list/upload-list.component";

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
    MarkedPipe,
    AdminPageComponent,
    ErrorPageComponent,
    UploadFormComponent,
    UploadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
