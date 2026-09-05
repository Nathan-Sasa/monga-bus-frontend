import { Component, input } from '@angular/core';

type logoType = 'logo' | 'text' | 'combo'
type sizeLogo = 'sm' | 'md' | 'lg'

@Component({
    selector: 'mg-logo',
    imports: [],
    templateUrl: './monga-logo.component.html',
    styleUrl: './monga-logo.component.css',
})
export class MongaLogoComponent {

	// size = input<sizeLogo>('md')
	logoType = input<logoType>('combo')
	size = input<number>(24)
	label = input<string | null>('Monga Bus Logo')
    isText = input.required<boolean>()
}
