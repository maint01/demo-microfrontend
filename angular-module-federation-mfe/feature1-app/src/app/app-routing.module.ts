// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mfe1'
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      import('./mfe1/mfe1.module').then((m) => m.Mfe1Module),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      import('./mfe2/mfe2.module').then((m) => m.Mfe2Module),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
