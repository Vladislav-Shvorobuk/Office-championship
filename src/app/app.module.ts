import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { MajorModule } from './pages/major/major.module';
import { SharedModule } from './shared/modules/shared.module';
// Components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { GreetingComponent } from './pages/greeting/greeting.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// Services
import { AuthService } from './shared/services/auth.service';
import { ValidationService } from './shared/services/validation.service';
import { UserService } from './shared/services/user.service';

// AngularFire
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    SignInComponent,
    PageNotFoundComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFire:
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    SharedModule,
    MajorModule,
  ],
  providers: [AuthService, ValidationService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
