// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {loadRemoteModule} from "@angular-architects/module-federation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routeList: any = [];
  title = 'shell';
  constructor(private router: Router, private http: HttpClient) {
    this.loadDynamicRoutes();
  }

  private loadDynamicRoutes() {
    this.http
      .get<any>('http://localhost:8080/configs')
      .subscribe((routes: any) => {
        console.log(routes);
        this.routeList = routes;
        const dynamicRoutes = routes?.map((route: any) => {
          console.log(route);
          return {
            path: route.modulePath, // Sử dụng matcher từ route.startWith
            loadChildren: () => this.loadMFE(route),
          };
        });

        this.router.resetConfig([...this.router.config, ...dynamicRoutes]);
      });
  }

  loadMFE(config: any) {
    return loadRemoteModule({
      type: config.type,
      remoteEntry: config.remoteEntry,
      exposedModule: config.exposedModule
    })
      .then(m => m[config.moduleName])
      .catch(
        () => import('./error-page/error-page.module').then(m => m.ErrorPageModule)
      );
  }
}
