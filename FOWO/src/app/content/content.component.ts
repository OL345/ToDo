import { Component } from '@angular/core';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  termine: termin[] = [];

  public termine$: Observable<termin[]>;

  constructor(private _data: DataService) {
    this.termine = this._data.getData();

    this.termine$ =_data.fetchData2();
  }

  public fetchData() {
    this.termine$ = this._data.fetchData2();
  }
}
