// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mfe1RoutingModule } from './mfe1-routing.module';
import { Mfe1Component } from './mfe1.component';
import {BComponent} from "./b/b.component";
import {AComponent} from "./a/a.component";


@NgModule({
  declarations: [
    Mfe1Component,
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    Mfe1RoutingModule
  ]
})
export class Mfe1Module { }
