import { Component } from '@angular/core';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { StatCountComponent } from './sections/stat-count/stat-count.component';
import { OurFeatsComponent } from './sections/our-feats/our-feats.component';

@Component({
    selector: 'mg-landing-page',
    imports: [
		HeroSectionComponent,
        StatCountComponent,
        OurFeatsComponent
	],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {

}
