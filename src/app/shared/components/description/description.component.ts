import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface IDescription {
  title: string,
  icons:{ 
    url: string,
    info: string
  }[]
}
@Component({
  selector: 'app-description',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  descriptions: IDescription[] = [
    {
      title: 'Máscara',
      icons: [
        {
          url: 'required-mask.png',
          info: 'Obrigatório'
        },
        {
          url: 'recommended-mask.png',
          info: 'Recomendado'
        }
      ]
    },
    {
      title: 'Toalha',
      icons: [
        {
          url: 'required-towel.png',
          info: 'Obrigatório'
        },
        {
          url: 'recommended-towel.png',
          info: 'Recomendado'
        }
      ]
    },
    {
      title: 'Bebedouro',
      icons: [
        {
          url: 'partial-fountain.png',
          info: 'Parcial'
        },
        {
          url: 'forbidden-fountain.png',
          info: 'Proibido'
        }
      ]
    },
    {
      title: 'Vestiários',
      icons: [
        {
          url: 'required-lockerroom.png',
          info: 'Liberado'
        },
        {
          url: 'partial-lockerroom.png',
          info: 'Parcial'
        },
        {
          url: 'forbidden-lockerroom.png',
          info: 'Fechado'
        },
      ]
    },

  ]

}
