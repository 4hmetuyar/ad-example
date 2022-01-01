import {Ads} from "./ads";
import {CampaignGroups} from "./campaign-groups";

export namespace Ad {
  export interface State {
    getAds: Ads.AdsResult[];
    getCampaignGroups: CampaignGroups.CampaignGroupResult[];
    getCampaignGroupTableResult: CampaignGroups.campaignGroupTable[];
  }
}
