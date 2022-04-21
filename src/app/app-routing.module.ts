import { MainBodyComponent } from './main-body/main-body/main-body.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { PortPageComponent } from './pages/port-page/port-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page/blog-post-page.component';
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

const routes: Routes = [

  { path: '', component: MainBodyComponent},
  { path: 'about', component: AboutPageComponent  },
  { path: 'portfolio', component: PortPageComponent },
  { path: 'blog', component: BlogPageComponent},
  { path: 'contact', component: ContactPageComponent},
  { path: 'blogPost/:id', component: BlogPostPageComponent},
  { path: 'admin', component: AdminPageComponent},
  { path: '**', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
