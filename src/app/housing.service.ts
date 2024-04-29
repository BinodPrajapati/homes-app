import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  //protected housingLicationList: HousingLocation[]=[];
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    //return this.housingLicationList;
    const data = await fetch(this.url);
    return await data.json() ?? [];
    
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    //return this.housingLicationList.find(housingLocation => housingLocation.id === id)
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
   // throw new Error("Method not implemented.");
  }
}
