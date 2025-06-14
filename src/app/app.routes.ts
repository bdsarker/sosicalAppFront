import { Routes } from '@angular/router';
import {Home} from '../features/home/home';
import {authGuardGuard} from '../core/guard/auth-guard-guard';
import {MemberList} from '../features/members/member-list/member-list';
import {MemberDetailed} from '../features/members/member-detailed/member-detailed';
import {Lists} from '../features/lists/lists';
import {Messages} from '../features/messages/messages';
import {ServerError} from '../shared/errors/server-error/server-error';
import {NotFound} from '../shared/errors/not-found/not-found';
import {TestErrors} from '../features/test-errors/test-errors';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuardGuard],
    children: [
      { path: 'members', component: MemberList },
      { path: 'members/:id', component: MemberDetailed },
      { path: 'lists', component: Lists },
      { path: 'messages', component: Messages },
    ]
  },
  { path: 'errors', component: TestErrors },
  { path: 'server-error', component: ServerError },
  { path: '**', component: NotFound }
];
