import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Ads, Campaign, CampaignGroups, ChartData, ChartDataSummary, ConversionEvent} from "./models";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AdService {

  baseUrl: string = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {

  }

  getAds(): Observable<Ads.AdsResult[]> {
    return this.httpClient.get<Ads.AdsResult[]>(this.baseUrl + '/ads');
  }

  getCampaignGroups(): Observable<CampaignGroups.CampaignGroupResult[]> {
    return this.httpClient.get<CampaignGroups.CampaignGroupResult[]>(this.baseUrl + '/campaign-groups');
  }

  getCampaigns(): Observable<Campaign.CampaignResult[]> {
    return this.httpClient.get<Campaign.CampaignResult[]>(this.baseUrl + '/campaigns');
  }


  getChartData(): Observable<ChartData.ChartDataResult[]> {
    return this.httpClient.get<ChartData.ChartDataResult[]>(this.baseUrl + '/chart-data');
  }

  getChartDataSummary(): Observable<ChartDataSummary.ChartDataSummaryResult> {
    return this.httpClient.get<ChartDataSummary.ChartDataSummaryResult>(this.baseUrl + '/chart-data-summary');
  }


  getConversionEvents(): Observable<ConversionEvent.ConversionEventResult[]> {
    return this.httpClient.get<ConversionEvent.ConversionEventResult[]>(this.baseUrl + '/conversion-events');
  }
}
