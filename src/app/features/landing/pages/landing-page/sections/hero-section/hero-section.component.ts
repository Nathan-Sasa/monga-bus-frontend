import { AfterViewInit, Component, inject, OnDestroy, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { VolMockService } from '../../../../../../core/services/vol-mock.service';
import { toSignal } from '@angular/core/rxjs-interop'
import { EntryAnimDirective } from '../../../../../../shared/directives/entry-anim.directive';
// import { NgOptimizedImage } from '@angular/common';
import { tap } from 'rxjs';
import { ListComponent } from '../../../../../../shared/components/list/list.component';
import { ProgressSpinner } from 'primeng/progressspinner'

@Component({
	selector: 'mg-hero-section',
	imports: [
		TabsModule,
		ListComponent,
		ProgressSpinner,
		EntryAnimDirective
	],
	templateUrl: './hero-section.component.html',
	styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent implements AfterViewInit, OnDestroy {

	private readonly volMockService = inject(VolMockService)
	protected loading = signal(true)
	protected vols = toSignal(this.volMockService.getVols().pipe(tap(() => this.loading.set(false))), {initialValue: []})

	currentIndex = 0;
    intervalId: any;

	heroMapper = [
		{
			country: '',
			image1: 'assets/images/hero/img0.JPG',
			image2: '',
		},
		{
			country: 'Caire',
			image1: 'assets/images/hero/egypt.PNG',
			image2: '',
		},
		{
			country: 'Paris',
			image1: 'assets/images/hero/img1.jpg',
			image2: '',
		},
		{
			country: 'New York',
			image1: 'assets/images/hero/img2.jpg',
			image2: '',
		},
		{
			country: 'CHINE',
			image1: 'assets/images/hero/img3.JPG',
			image2: '',
		},
	]

	ngAfterViewInit(): void {
		this.startAutoSlide()
	}

	ngOnDestroy(): void {
		clearInterval(this.intervalId);
	}

	startAutoSlide(): void {
		this.intervalId = setInterval(() => {
            this.currentIndex = (this.currentIndex + 1) % this.heroMapper.length;
        }, 3000);
	}
}
