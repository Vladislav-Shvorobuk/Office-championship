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

// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { LayoutModule } from '@angular/cdk/layout';

//
// Angular Material / Bootstrap
//

// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

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
    // Ng-bootstrap:
    NgbModule,
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
