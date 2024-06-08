import { PackageService } from './../../services/package/package.service';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { PackageRead } from '../../dto/package';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-package-list-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule,RouterModule],
  templateUrl: './package-list-page.component.html',
  styleUrl: './package-list-page.component.css'
})
export class PackageListPageComponent {
  items: PackageRead[] = [];
  loading: boolean = false;
  constructor(private packageService: PackageService) {

  }

  loadItems() {
    this.loading = true;
    this.packageService.getList().subscribe({
      next: items => {
        this.items = items;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
        alert("Error loading packages!")
      }
    })
  }
  environment = environment;
}
