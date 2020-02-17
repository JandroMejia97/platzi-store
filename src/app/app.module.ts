import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { QuicklinkModule } from 'ngx-quicklink';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from 'src/environments/environment';
import { AuthInterceptor } from '@core/interceptors/auth.interceptor';
import { SentryErrorHandler } from '@core/services/sentry-error-handler.service';
import { ServiceWorkerModule } from '@angular/service-worker';

import * as Sentry from '@sentry/browser';

if (environment.production) {
  Sentry.init({
    dsn: environment.sentry.dsn
  });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    QuicklinkModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
