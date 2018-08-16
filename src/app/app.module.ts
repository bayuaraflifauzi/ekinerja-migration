import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { LoginComponent } from './pages/login/login.component';
import { KinerjaPegawaiComponent } from './pages/pegawai/kinerja-pegawai/kinerja-pegawai.component';
import { SkpBulananComponent } from './pages/pegawai/skp-bulanan/skp-bulanan.component';
import { PelaporanComponent } from './pages/pegawai/pelaporan/pelaporan.component';


const appRoutes: Routes = [
  { path: 'kinerja-pegawai', component: KinerjaPegawaiComponent },
  { path: 'skp-bulanan', component: SkpBulananComponent },
  { path: 'pelaporan',      component: PelaporanComponent },

  { path: '',   redirectTo: '/kinerja-pegawai', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    LoginComponent,
    KinerjaPegawaiComponent,
    SkpBulananComponent,
    PelaporanComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
