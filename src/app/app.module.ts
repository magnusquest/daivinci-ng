import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { FooterComponent } from './components/footer/footer.component';
import { AiComponent } from './components/ai/ai.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WalletComponent } from './components/wallet/wallet.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{ path: '', component: SplashComponent },
			{ path: 'generate', component: AiComponent },
		]),
		AppRoutingModule,
		FontAwesomeModule,
	],
	providers: [],
	bootstrap: [AppComponent],
	declarations: [AppComponent, SplashComponent, AiComponent, FooterComponent, WalletComponent],
})
export class AppModule {}
