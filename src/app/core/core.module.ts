import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { Page404Component } from "./components/page-404/page-404.component";

@NgModule({
  declarations: [
    NavBarComponent,
    Page404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: Page404Component
      },
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule {

}
