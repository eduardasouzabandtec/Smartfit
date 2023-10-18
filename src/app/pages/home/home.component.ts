import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderComponent } from 'src/app/shared/components/sub-header/sub-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SubHeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
