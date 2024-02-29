import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { termin } from '../interfaces/termin';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-as-table',
  templateUrl: './view-as-table.component.html',
  styleUrls: ['./view-as-table.component.css']
})
export class ViewAsTableComponent {
  termine$: Observable<termin[]>;

  displayedColumns: string[] = ['ID', 'Title', 'Description'];

  constructor(private _data: DataService) {
    this.termine$ = this._data.fetchData2();
  }
}
