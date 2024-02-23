import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { termin } from '../interfaces/termin'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() input_data!: termin;

}
