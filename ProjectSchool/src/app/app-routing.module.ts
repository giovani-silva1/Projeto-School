import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboards/dashboards.module').then(
        (m) => m.DashboardsModule
      ),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./pages/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./pages/teachers/teachers.module').then((m) => m.TeachersModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./pages/students/students.module').then((m) => m.StudentsModule),
  },
  {
    path: 'suporte',
    loadChildren: () =>
      import('./pages/suporte/suporte.module').then((m) => m.SuporteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
