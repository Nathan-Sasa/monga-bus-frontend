import { Component, computed, effect, EventEmitter, input, Output, signal } from '@angular/core';
import { Card } from 'primeng/card'
import { Select } from 'primeng/select'
import { InputText } from 'primeng/inputtext'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Button, ButtonIcon } from 'primeng/button'
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ISearchVol, ISearchVolAsString } from '../../../features/vols/model/search-form.model';

@Component({
	selector: 'mg-vol-form',
	imports: [
    Card,
    InputText,
    IconFieldModule,
    InputIconModule,
    Select,
    ReactiveFormsModule,
    Button
],
	templateUrl: './vol-form.component.html',
	styleUrl: './vol-form.component.css',
})
export class VolFormComponent {

	@Output() volFormValues = new EventEmitter<ISearchVolAsString>()
	// clearForm = input<EventEmitter<boolean>>()
	// private setClearForm = signal<boolean | EventEmitter<boolean> | undefined>(this.clearForm())
	clearForm = input<boolean>(false)
	private setClearForm = signal<boolean>(this.clearForm())

	protected passagers = signal([{id: 1, name: 'enfant'}, {id: 2, name: 'adulte'}])

	protected loading = signal<boolean>(false)
	protected submitting = signal<boolean>(false)


	form = new FormGroup<ISearchVol>({
		depart: new FormControl('', {
			validators: [Validators.required],
			nonNullable: true
		}),
		destination: new FormControl('', {
			validators: [Validators.required],
			nonNullable: true
		}),
		date: new FormControl('',{}),
		passager: new FormControl('', {})
	})

	constructor() {
		effect(() => {
			console.log('event receive : ', this.clearForm())
			console.log('set clear fom : ', this.setClearForm())
		})
	}


	submit(): void {
		this.form.markAllAsTouched()
		if (this.form.invalid) return
		
		this.loading.set(true)
		this.submitting.set(true)
		
		const formValueAsString: ISearchVolAsString = {
			depart: this.form.get('depart')?.value.trim() as string,
			destination: this.form.get('destination')?.value.trim() as string,
			date: this.form.get('date')?.value?.trim() as string,
			passager: this.form.get('passager')?.value as string
		}

		this.volFormValues.emit(formValueAsString)

		setTimeout(() => {
			this.loading.set(false)
			this.submitting.set(false)
		}, 500)
	}

	// clearFormHandle(click: Event){
	// 	if (click) {
	// 		this.form.reset()
	// 	}
	// }
}
