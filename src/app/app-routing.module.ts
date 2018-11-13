import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArtComponent } from './art/art.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: 'full' },
  { path: 'blogs', component: BlogListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'art', component: ArtComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
