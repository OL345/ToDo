import { FocusKeyManager } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  data: termin[] = [];
  constructor(private _data : DataService) {
    this.data = this._data.getData();

  }
}
