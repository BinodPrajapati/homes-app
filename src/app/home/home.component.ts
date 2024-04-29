import { Component, inject} from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingLocation } from "../housing-location";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
      <input type="text" placeholder= "Filter by City" #filter/> 
      <button type="button" class="primary"  (click)="filterResults(filter.value)">Search</button>
    
      </form>
    </section>
      
    <section class="result">
      <app-housing-location *ngFor="let housingLocation of filterLocationList"
       [housingLocation]= "housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {

  housingLocationList: HousingLocation[]=[];
  filterLocationList:  HousingLocation[]=[];

  hosuingService : HousingService = inject(HousingService);

  constructor(){
    //this.housingLicationList = this.hosuingService.getAllHousingLocations();

    this.hosuingService.getAllHousingLocations().then((housingLicationList: HousingLocation[]) =>{
      this.housingLocationList=housingLicationList;
      this.filterLocationList= housingLicationList;
    } );

  }

  filterResults(text:string) {

    if(!text) this.filterLocationList= this.housingLocationList;

    this.filterLocationList= this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()) 
    );
  }

}
