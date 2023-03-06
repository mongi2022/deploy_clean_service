import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-tabset';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { AccordionModule } from "ngx-accordion";
import { CrystalLightboxModule } from '@crystalui/angular-lightbox';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { FooterStyleTwoComponent } from './components/common/footer-style-two/footer-style-two.component';
import { MethodComponent } from './components/pages/method/method.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { StrategyComponent } from './components/pages/strategy/strategy.component';
import { ServiceComponent } from './components/pages/service/strategy.component';

import { PartnerComponent } from './components/pages/partner/partner.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { ContactInfoComponent } from './components/pages/contact-page/contact-info/contact-info.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { TermConditionComponent } from './components/pages/term-condition/term-condition.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    FooterStyleTwoComponent,
    MethodComponent,
    HomeoneBannerComponent,
    NavbarStyleOneComponent,
    StrategyComponent,
    PartnerComponent,
    ServiceComponent,
    ContactPageComponent,
    ContactInfoComponent,
    FaqPageComponent,
    PrivacyComponent,
    AboutUsComponent,
    NotFoundComponent,
    TermConditionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxScrollTopModule,
    CarouselModule,
    BrowserAnimationsModule,
    TabsModule,
    StickyNavModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    CountUpModule,
    AccordionModule,
    CrystalLightboxModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }