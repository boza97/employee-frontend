import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent],
  exports: [NavbarComponent, PageNotFoundComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error(
        'You should import core module only in the app root module'
      );
    }
  }
}
