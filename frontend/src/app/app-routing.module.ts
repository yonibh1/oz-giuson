import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/Home/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "homePage",
    component: HomePageComponent
  },
  
  {
    path: "",
    redirectTo: "/homePage",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
