import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AdService} from "../../../service/ad.service";
import {AdState, CampaignGroups, GetCampaignGroups} from "../../../service";
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";


@Component({
  selector: 'app-organisms-table',
  templateUrl: './organisms-table.component.html',
  styleUrls: ['./organisms-table.component.css']
})
export class OrganismsTableComponent implements AfterViewInit, OnInit {

  @Input() columnsDetail: any = {
    'Name': 'name',
    'Schedule': 'schedule',
    'Budget': 'budget',
    'Clicks': 'clicks',
    'Cpc': 'cpc',
    'Conv': 'conv',
    'Spend': 'spend'
  };

  @Input() tableName = 'Basic Table';

  displayedColumns = [];

  dataSource = new MatTableDataSource([]);

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Select(AdState.getCampaignGroupTableResult)
  getCampaignGroupTableResult$: Observable<CampaignGroups.campaignGroupTable[]> | undefined;

  constructor(private dataService: AdService, private store: Store) {
    this.store.dispatch(new GetCampaignGroups());
    // @ts-ignore
    this.getCampaignGroupTableResult$.pipe().subscribe(data => {
      this.initializeDataSources(data)
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  initializeDataSources(data: any): void {
    // @ts-ignore
    this.displayedColumns = Object.keys(this.columnsDetail);
    this.setTableDataSource(data);
  }

  setTableDataSource(data: any): void {
    // @ts-ignore
    this.dataSource = new MatTableDataSource<any>(data);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
  }

}
