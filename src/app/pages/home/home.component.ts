import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from 'src/app/shared/components/sub-header/sub-header.component';
import { DescriptionComponent } from 'src/app/shared/components/description/description.component';
import { FilterComponent } from 'src/app/shared/components/filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent, DescriptionComponent, FilterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
