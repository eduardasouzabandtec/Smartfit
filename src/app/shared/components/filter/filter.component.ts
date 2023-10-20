import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  periodOptions = [
    {
      description: 'Manhã',
      time: '06:00 às 12:00'
    },
    {
      description: 'Tarde',
      time: '12:01 às 18:00'
    },
    {
      description: 'Noite',
      time: '18:01 às 23:00'
    },
  ]

  periodSelect= new FormControl(false) 

}
