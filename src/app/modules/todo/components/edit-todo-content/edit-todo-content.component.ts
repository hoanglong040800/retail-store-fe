import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodo } from 'shared/interfaces';
import { SimpleChangesTyped } from 'shared/types';

@Component({
  selector: 'edit-todo-content',
  templateUrl: './edit-todo-content.component.html',
})
export class EditTodoContentComponent implements OnInit {
  @Input() initForm!: ITodo;

  editTaskForm!: FormGroup;

  ngOnInit() {
    this.editTaskForm = new FormGroup({
      title: new FormControl(this.initForm.title, [
        Validators.required,
        Validators.maxLength(50),
      ]),
      desc: new FormControl(this.initForm.desc, [Validators.maxLength(200)]),
    });
  }

  // TODO solve lint error
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnChanges({ initForm }: SimpleChangesTyped<EditTodoContentComponent>) {
    if (initForm && this.editTaskForm) {
      this.editTaskForm.patchValue(this.initForm);
    }
  }

  get f() {
    return this.editTaskForm.controls;
  }

  // MUST BE public so action-modal can access
  public onSubmit() {
    console.log(this.f);
  }
}
