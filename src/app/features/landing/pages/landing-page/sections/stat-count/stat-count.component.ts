import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Card } from 'primeng/card'
import { Button } from 'primeng/button'
import { RouterLink } from '@angular/router';
import { EntryAnimDirective } from '../../../../../../shared/directives/entry-anim.directive';

@Component({
    selector: 'mg-stat-count',
    imports: [
		Card,
		Button,
		RouterLink,
		EntryAnimDirective
	],
    templateUrl: './stat-count.component.html',
    styleUrl: './stat-count.component.css',
})
export class StatCountComponent implements AfterViewInit, OnDestroy {

	@ViewChild('statSection') statSection!: ElementRef

	billet: number = 0
	destination: number = 0
	companyPartner = 0

	private hasAnimated: boolean = false
	private observer!: IntersectionObserver

	ngAfterViewInit(): void {
		this.observer = new IntersectionObserver ((entries) => {
			entries.forEach(entry => {
				if(entry.isIntersecting && !this.hasAnimated){
					this.startCounters()
					this.hasAnimated = true

					this.observer.disconnect()
				}
			})
		}, {threshold: 0.5})

		this.observer.observe(this.statSection.nativeElement)
	}

	startCounters() {
		this.animateValue(0, 170, 1500, (val) => this.billet = val)

		setTimeout(() => this.animateValue(0, 75, 1500, (val) => this.destination = val), 200)

		setTimeout(() => this.animateValue(0, 5, 1500, (val) => this.companyPartner = val), 400)

	}

	animateValue(start: number, end: number, duration: number, callback: (val: number) => void) {
		const starTime = performance.now()
		const step = (currentTimer: number) => {
			const progress = Math.min((currentTimer - starTime) / duration, 1)
			const value = Math.floor(progress * (end - start) + start)
			callback(value)

			if(progress < 1) requestAnimationFrame(step)
		}
		requestAnimationFrame(step)
	}

	ngOnDestroy(): void {
		if(this.observer){
			this.observer.disconnect()
		}
	}
}
