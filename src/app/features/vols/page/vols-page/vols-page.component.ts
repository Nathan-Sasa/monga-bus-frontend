import { Component, DestroyRef, ElementRef, EventEmitter, inject, OnInit, signal, ViewChild } from '@angular/core';
import { VolMockService } from '../../../../core/services/vol-mock.service';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
// import { tap } from 'rxjs';
import { ListComponent } from '../../../../shared/components/list/list.component';
import { IVol } from '../../../../core/models/vol-mock.model';
import { Button } from 'primeng/button'
import { EntryAnimDirective } from '../../../../shared/directives/entry-anim.directive';
import { VolFormComponent } from '../../../../shared/components/vol-form/vol-form.component';
import { ISearchVolAsString } from '../../model/search-form.model';
import { ProgressSpinner } from 'primeng/progressspinner'

@Component({
	selector: 'mg-vols-page',
	imports: [
		ListComponent,
		VolFormComponent,
		EntryAnimDirective,
		ProgressSpinner,
		Button
	],
	templateUrl: './vols-page.component.html',
	styleUrl: './vols-page.component.css',
})
export class VolsPageComponent implements OnInit {

	private readonly volMockService = inject(VolMockService)
	private readonly destroyRef = inject(DestroyRef)

	@ViewChild('volListSection', {read: ElementRef}) volListSection!: ElementRef

	protected vols = signal<IVol[]>([])
	protected loading = signal(true)
	protected searchEmpty = signal<{is: boolean, message: string}>({is: false, message: 'Aucun vol trouvé avec cette recherche'})
	protected clearForm = signal<boolean>(false)

	private fetch = signal<boolean>(true)

	ngOnInit(): void {
		this.loadVols(this.fetch())
	}

	loadVols(initialize: boolean): void {
		if (!initialize) return
		this.loading.set(true)
		this.volMockService.getVols()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (vols )=> {
					this.vols.set(vols)
					this.loading.set(false)
					this.fetch.set(false)
				}
			})
	}

	volSearched(vol: ISearchVolAsString) {
		if (!vol) return

		this.fetch.set(false)
		this.loading.set(true)
		this.scrollToList()

		this.volMockService.searchBy(vol)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe({
				next: (result) => {
					this.vols.set(result)
					this.loading.set(false)

					if(result.length <= 0) {
						this.searchEmpty.set({is: true, message: this.searchEmpty().message})
					}
				}
			})
	}

	actualizeList(){
		this.searchEmpty.set({is: false, message: this.searchEmpty().message})
		this.loadVols(true)
	}
	
	clearVolForm() {
		this.clearForm.set(true)
	}


	scrollToList() {
		if (!this.volListSection) return 

		this.volListSection.nativeElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest',
		});
	}
}
