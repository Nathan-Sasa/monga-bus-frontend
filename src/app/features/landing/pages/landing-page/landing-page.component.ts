import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { StatCountComponent } from './sections/stat-count/stat-count.component';

@Component({
    selector: 'mg-landing-page',
    imports: [
		HeroSectionComponent,
        StatCountComponent,
        AboutSectionComponent
        // EntryAnimDirective
	],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {

}
