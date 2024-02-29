import { Component } from '@angular/core';
import { termin } from '../interfaces/termin';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  data: termin[] = [];

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog, private _data: DataService, private snackBar: MatSnackBar,) {
    this.data = this._data.getData();
  }  
}
