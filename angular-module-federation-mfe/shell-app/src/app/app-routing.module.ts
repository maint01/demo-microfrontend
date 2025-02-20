// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import {AppComponent} from "./app.component";

function loadMFE(url: string) {
  return loadRemoteModule({
    type: 'module',
    remoteEntry: `${url}/remoteEntry.js`,
    exposedModule: './FE1Module'
  })
  .then(m => m.Mfe1Module)
  .catch(
    () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)
  );
}

function loadMFE2(url: string) {
  return loadRemoteModule({
    type: 'module',
    remoteEntry: `${url}/remoteEntry.js`,
    exposedModule: './FE2Module'
  })
    .then(m => m.Mfe2Module)
    .catch(
      () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)
    );
}

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  // {
  //   path: 'plugin/plugin1',
  //   loadChildren: () => loadMFE(environment.mfe1URL)
  // },
  // {
  //   path: 'plugin/plugin2',
  //   loadChildren: () => loadMFE2(environment.mfe1URL)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
