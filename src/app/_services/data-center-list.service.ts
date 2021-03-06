import { Injectable, Injector } from '@angular/core';
// import { Http, Headers, Response } from '@angular/http';
import { GenericApiService } from './generic-api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { APPCONFIG } from '../config';


@Injectable()
export class DataCenterListService extends GenericApiService {

	constructor(private injector: Injector){
		super(injector);
	}

	getDataCenters() {

		return this.makeGetRequest({
			path: '/api/data-center'
		});
	}

}
