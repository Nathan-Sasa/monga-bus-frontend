import { Component, input, ViewChild } from '@angular/core';
import { IVol } from '../../../core/models/vol-mock.model';
import { EntryAnimDirective } from '../../directives/entry-anim.directive';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'mg-list',
	imports: [
		TableModule,
		ButtonModule,
		EntryAnimDirective,
		CommonModule,
		RouterLink,
		NgOptimizedImage
	],
	templateUrl: './list.component.html',
	styleUrl: './list.component.css',
})
export class ListComponent {
	
	vols = input.required<IVol[]>()
	label = input.required<string>()
	isHeader = input.required<boolean>()
	textSize= input<string>('text-base')
	logoSizeH= input<string>('48')
	logoSizeW= input<string>('48')

}
