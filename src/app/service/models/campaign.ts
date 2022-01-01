import {Ads} from "./ads";

export namespace Campaign {

  export interface CampaignResult {
    campaign: campaign;
    metrics: Ads.metrics;
  }

  export interface campaign {
    resourceName: string;
    status: string;
    networkSettings: Ads.networkSettings;
    name: string;
    id: string;
    campaignBudget: string;
    startDate: string;
    endDate: string;
    campaignBudgetDetail: Ads.campaignBudgetDetail;
    campaignDeviceList: string[];
  }
}
