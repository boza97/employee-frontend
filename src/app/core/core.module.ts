import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
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
