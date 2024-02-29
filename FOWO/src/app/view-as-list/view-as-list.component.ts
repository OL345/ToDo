import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-as-list',
  templateUrl: './view-as-list.component.html',
  styleUrl: './view-as-list.component.css'
})
export class ViewAsListComponent {
  termine: termin[] = [];

  public termine$: Observable<termin[]>;

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService, private snackBar: MatSnackBar,) {
    this.termine = this._data.getData();

    this.termine$ =_data.fetchData2();
  }
}
