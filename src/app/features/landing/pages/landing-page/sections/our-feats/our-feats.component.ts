import { Component } from '@angular/core';
import { EntryAnimDirective } from '../../../../../../shared/directives/entry-anim.directive';
import { Button } from 'primeng/button'
import { RouterLink } from '@angular/router';

@Component({
	selector: 'mg-our-feats',
	imports: [
		EntryAnimDirective,
		RouterLink,
		Button
	],
	templateUrl: './our-feats.component.html',
	styleUrl: './our-feats.component.css',
})
export class OurFeatsComponent {

}
