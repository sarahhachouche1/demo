import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';

export const taskCreateGuard: CanDeactivateFn<TaskFormComponent> = (component: TaskFormComponent
  , currentRoute: ActivatedRouteSnapshot, currentState : RouterStateSnapshot
  , nextState : RouterStateSnapshot ) => {
    const authService = inject(AuthService);
    if (component.taskForm.dirty && !component.isSaved) {
      const taskTitle = component.task?.title || 'New Task';
      return confirm(`Navigate away and lose all changes to ${taskTitle}?`);
    }
  return true;
};

