import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRegisterData} from "../../../interfaces";
import {AuthService} from "../../../../services/auth.service";
import {Task} from "../../interfaces";
import {TrelloListComponent} from "../trello-list/trello-list.component";


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrl: './trello.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrelloComponent {

  public form: FormGroup;


 public users: UserRegisterData[] = [];

@ViewChild('trelloListComponent') private trelloListComponent: TrelloListComponent;
  constructor(
    private AuthService: AuthService,
  ) {
    this.initForm();
    this.users = this.AuthService.getUsers();
  }

  public submit(): void {

    const task:Task = {
      task: this.form.value.task,
      worker: this.form.value.worker || this.AuthService.activeUser?.login,
      creator: this.AuthService.activeUser?.login || ''
    }
    const tasks : Task[] = !!window.localStorage.getItem('tasks')
      ? JSON.parse(window.localStorage.getItem('tasks') || '')
      : [];
    tasks.push(task);
    this.form.reset();


    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    this.trelloListComponent.reload$.next(null);

  }
  private initForm(): void {
    this.form = new FormGroup<any>({
      task: new FormControl(null, [Validators.required]),
      worker: new FormControl(null),
    })
  }



}
