import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RiderjobComponent } from './riderjob/riderjob.component';
import { StoreComponent } from './store/store.component';
import { StoreexComponent } from './storeex/storeex.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full' },
  {path: 'home', component: HomeComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'store', component: StoreComponent},
  {path:'riderjob', component: RiderjobComponent},
  {path:'storeex', component: StoreexComponent},
  {path:'reports', component:ReportsComponent},
  {path:'login', component:LoginComponent},
  {path:'setting', component:SettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
