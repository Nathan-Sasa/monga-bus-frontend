import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { delay, Observable } from 'rxjs';
import { IVol } from '../models/vol-mock.model';

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
}
