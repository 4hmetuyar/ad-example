import {Ads} from "./ads";

export namespace ChartDataSummary {

  export interface ChartDataSummaryResult {
    customer: customer;
    metrics: Ads.metrics;
    segments: segments;
  }

  export interface customer {
    resourceName: string;
  }

  export interface segments {
    date: string;
  }
}
