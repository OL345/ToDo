import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-task-dialog',
  templateUrl: './update-task-dialog.component.html',
  styleUrls: ['./update-task-dialog.component.css']
})
export class UpdateTaskDialogComponent {
  taskForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required]
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
