import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-task-dialog',
  templateUrl: './delete-task-dialog.component.html',
  styleUrls: ['./delete-task-dialog.component.css']
})
export class DeleteTaskDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteTaskDialogComponent>) {}

  confirmDelete(): void {
    // Emit an event or perform any action to confirm deletion
    this.dialogRef.close(true);
  }

  cancelDelete(): void {
    // Close the dialog without performing deletion
    this.dialogRef.close(false);
  }

}
