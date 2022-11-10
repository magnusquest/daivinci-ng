import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root',
})
export class MoralisService {
	apiKey = environment.apiKey;
	testAddress = environment.myAddress;

	constructor() {}
}
