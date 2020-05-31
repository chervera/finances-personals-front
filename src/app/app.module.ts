import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Store } from '@ngrx/store';
import { AppState } from './core/store/core.reducer';
import { initiateTokenFromStorage } from './core/store/core.actions';
import { AuthService } from './containers/auth/services/auth.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeEs, 'es-ES');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NoopAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<AppState>, auth: AuthService) => {
        return () => {
          if (auth.retriveToken()) {
            store.dispatch(initiateTokenFromStorage());
          }
        };
      },
      multi: true,
      deps: [Store, AuthService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
