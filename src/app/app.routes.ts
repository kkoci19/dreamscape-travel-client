import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PackageDetailsComponent } from './pages/package-details/package-details.component';
import { PackageListPageComponent } from './pages/package-list-page/package-list-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'package-details', component: PackageDetailsComponent },
  { path: 'packages', component: PackageListPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'log-in', component: LogInPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'profile', component: ProfilePageComponent }
];
