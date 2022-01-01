import {Ads} from "./ads";

export namespace CampaignGroups {

  export interface CampaignGroupResult {
    campaignGroup: campaignGroup;
    metrics: Ads.metrics;
  }

  export interface campaignGroup {
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

  export interface campaignGroupTable {
    name: string;
    schedule: string;
    budget: string;
    clicks: string;
    cpc: string;
    conv: string;
    spend: string;
  }
}
