import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { FragmentScrollModule } from './directives/fragment-scroll/fragment-scroll.module';
import { BannerBlackModule } from './sections/banner-black/banner-black.module';
import { BannerDeskModule } from './sections/banner-desk/banner-desk.module';
import { BannerModule } from './sections/banner/banner.module';
import { FeaturesModule } from './sections/features/features.module';
import { Grid1Module } from './sections/grid1/grid1.module';
import { ServicesModule } from './sections/services/services.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NavbarModule,
    BannerModule,
    Grid1Module,
    BannerDeskModule,
    BannerBlackModule,
    ServicesModule,
    FeaturesModule,
    FooterModule,
    FragmentScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
