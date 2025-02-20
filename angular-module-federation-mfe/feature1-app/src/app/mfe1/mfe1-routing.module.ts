// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1Component } from './mfe1.component';
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";

const routes: Routes = [
  {
    path: '',
    component: Mfe1Component
  },
  {
    path: 'a',
    component: AComponent,
  },{
    path: 'b',
    component: BComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mfe1RoutingModule { }
