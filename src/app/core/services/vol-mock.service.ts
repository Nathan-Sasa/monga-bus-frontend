import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { delay, map, Observable, tap } from 'rxjs';
import { IVol } from '../models/vol-mock.model';
import { ISearchVolAsString } from '../../features/vols/model/search-form.model';

@Injectable({
  	providedIn: 'root',
})
export class VolMockService {
  
	private readonly http = inject(HttpClient)
	private readonly volsApi = environment.apiUrls.vols

	getVols(): Observable<IVol[]> {
		return this.http.get<IVol[]>(this.volsApi)
			.pipe(delay(500))
	}

	searchBy(vol: ISearchVolAsString): Observable<IVol[]>{

		let volsFind: IVol[] = []

		return this.getVols()
			.pipe(
				map((vols) => {
					if(vols.length > 0) {
						const result = vols.filter(v => v.depart.town === vol.depart && v.destinations.town === vol.destination)
						volsFind = result
						return volsFind
					}
					return volsFind = []
				}
			),
			delay(1000)
		)
	}
}
