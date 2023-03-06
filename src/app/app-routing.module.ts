import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermConditionComponent } from './components/pages/term-condition/term-condition.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

const routes: Routes = [
    {path: '', component: HomeDemoOneComponent},

    {path: 'terms-conditions-web', component: TermConditionComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactPageComponent},
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }