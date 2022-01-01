export namespace Ads {

  export interface AdsResult {
    ad: ad;
    metrics: metrics;
  }

  export interface ad {
    campaignBudget: string;
    campaignBudgetDetail: campaignBudgetDetail;
    campaignDeviceList: string[];
    campaignId:string;
    endDate:string;
    id:string;
    name:string;
    networkSettings:networkSettings;
    resourceName:string;
    startDate:string;
    status:string;
  }

  export  interface  networkSettings{
    targetContentNetwork:boolean;
    targetGoogleSearch:boolean;
    targetPartnerSearchNetwork:boolean;
    targetSearchNetwork:boolean;

  }
  export interface campaignBudgetDetail {
    campaign: campaign;
    campaignBudget: campaignBudget;
  }


  export interface campaignBudget {
    amountMicros: string;
    id: string;
    resourceName: string;
  }

  export interface campaign {
    id: string;
    resourceName: string;
  }

  export interface metrics {
    allConversions: number;
    averageCpc: number;
    clicks: string;
    conversions: number;
    costMicros: string;
    costPerConversion: number;
    ctr: number;
    impressions: string;
  }
}
