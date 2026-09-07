import { FormControl } from "@angular/forms"

export interface ISearchVol {
    depart: FormControl<string>
    destination: FormControl<string> // string
    date: FormControl<string | null> // string
    passager: FormControl<string | null> // string
}

export interface ISearchVolAsString {
    depart: string
    destination: string
    date: string
    passager: string
}