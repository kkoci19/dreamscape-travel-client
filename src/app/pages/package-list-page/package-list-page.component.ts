import { Component } from '@angular/core';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-package-list-page',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './package-list-page.component.html',
  styleUrl: './package-list-page.component.css'
})
export class PackageListPageComponent {

}
