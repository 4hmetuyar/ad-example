import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AdService} from "../ad.service";
import {GetAds, GetCampaignGroups} from "../actions";
import {catchError, map, tap, throwError} from "rxjs";
import {AD_DEFAULTS as defaults} from '../defaults';
import {Ad, Ads, Campaign, CampaignGroups} from "../models";
import {Injectable} from "@angular/core";


@State<Ad.State>({
  name: 'AdState',
  defaults,
})
@Injectable()
export class AdState {
  constructor(private adService: AdService) {
  }

  @Selector()
  static getAdsResult({getAds}: Ad.State): Ads.AdsResult[] {
    return getAds;
  }

  @Selector()
  static getCampaignGroupsResult({getCampaignGroups}: Ad.State): CampaignGroups.CampaignGroupResult[] {
    return getCampaignGroups;
  }

  @Selector()
  static getCampaignGroupTableResult({getCampaignGroupTableResult}: Ad.State): CampaignGroups.campaignGroupTable[] {
    return getCampaignGroupTableResult;
  }


  @Action(GetAds)
  getAds({patchState}: StateContext<Ad.State>) {
    return this.adService.getAds()
      .pipe(
        catchError(error => throwError(error)),
        tap(getAds => patchState({getAds})),
      );
  }


  @Action(GetCampaignGroups)
  getCampaignGroups({patchState}: StateContext<CampaignGroups.campaignGroupTable[]>) {
    return this.adService.getCampaignGroups()
      .pipe(
        map(data=>{
         return  data.reduce(function (pV, cV, cI) {
            const tableData = {
              name: cV.campaignGroup.name,
              schedule: cV.campaignGroup.startDate,
              budget: cV.campaignGroup.campaignBudgetDetail.campaignBudget.amountMicros,
              clicks: cV.metrics.clicks,
              cpc: cV.metrics.costPerConversion,
              conv: cV.metrics.conversions,
              spend: cV.metrics.ctr
            };
            // @ts-ignore
            pV.push(tableData);
            return pV;
          }, []);
        }),
        catchError(error => throwError(error)),
        tap(getCampaignGroupTableResult => {
          // @ts-ignore
          patchState({getCampaignGroupTableResult});
        }),
      );
  }
}
