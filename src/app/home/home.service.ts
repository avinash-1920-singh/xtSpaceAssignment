import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HomeService {
    yearFilterApplied=false;
    launchFilterApplied=false;
    landingFilterApplied=false;
    criteria=[]
    cardData=[];
    constructor(private http: HttpClient) { }
    public getRecordsWithoutFilter() {
        return this.http.get('https://api.spacexdata.com/v3/launches?limit=100')
    }
    public getFilteredData(){
        let url='https://api.spacexdata.com/v3/launches?limit=100';
        if(this.criteria.length>0){
            this.criteria.forEach((criteria)=>{
                url+=`&${criteria['filterName']}=${criteria['value']}`
            })
            console.log(url)
        }
        return  this.http.get(url);
    }
}
