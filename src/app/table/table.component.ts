import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild,AfterViewInit} from '@angular/core';
import { MatSort ,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface Transaction {
 
  transactionRefNo: string;
  valueDate: string;
  payerName: string;
  payerAccountNo: string;
  payeeName: string;
  payeeAccountNo: string;
  amount: number;
  validStatus: string;
  sanctionStatus: string;
  // sanctionFailMessage: string;
  // validationFailMessage: string;
}

export interface EmpFilter {
  name:string;
  options:string[];
  defaultValue:string;
}

export interface filterOption{
  name:string;
  value:string;
  isdefault:boolean;
}

/* const ELEMENT_DATA: Transaction[] = [
  {
    transactionRefNo: "123456789001",
    valueDate: "2022-04-09",
    payerName: "KamalNathan",
    payerAccountNo: "200001020141",
    payeeName: "SunainaPatil",
    payeeAccountNo: "200001020939",
    amount: 1256.0,
    validStatus: "Pass",
    sanctionStatus: "Pass",
    // sanctionFailMessage: "Pass",
    // validationFailMessage: "Pass",
    
},
  {
      transactionRefNo: "123456789001",
      valueDate: "2022-04-09",
      payerName: "KamalNathan",
      payerAccountNo: "200001020141",
      payeeName: "SunainaPatil",
      payeeAccountNo: "200001020939",
      amount: 1256.0,
      validStatus: "Fail",
      sanctionStatus: "Pass",
      // sanctionFailMessage: "Pass",
      // validationFailMessage: "Pass",
      
  },{
    transactionRefNo: "156456789012",
    valueDate: "2022-04-09",
    payerName: "VimalSukumar",
    payerAccountNo: "200001060111",
    payeeName: "MohiniChawal",
    payeeAccountNo: "200001520999",
    amount: 329.0,  
    validStatus: "Fail",
    sanctionStatus: "Pass",  
},
{
    transactionRefNo: "123948589012",
    valueDate: "2022-04-09",
    payerName: "KaranKumar",
    payerAccountNo: "200001620999",
    payeeName: "AnandiGupta",
    payeeAccountNo: "200001020939",
    amount: 10000.0,   
    validStatus: "Fail",
    sanctionStatus: "Pass",  
},
/* {
    transactionRefNo: "123456789112",
    valueDate: "2022-04-09",
    payerName: "VijSavrani",
    payerAccountNo: "200001020115",
    payeeName: "TestUser1",
    payeeAccountNo: "200001020994",
    amount: 500.0,    
},
{
    transactionRefNo: "123456789019",
    valueDate: "2022-04-09",
    payerName: "NarayananIyer",
    payerAccountNo: "200001020113",
    payeeName: "AshwiniKumari",
    payeeAccountNo: "200001020992",
    amount: 999.0,    
},
{
    transactionRefNo: "123456789013",
    valueDate: "2022-04-09",
    payerName: "NanyaNewton",
    payerAccountNo: "200001029111",
    payeeName: "KavyaNath",
    payeeAccountNo: "200001080999",
    amount: 99.0,    
},
{
    transactionRefNo: "123456789001",
    valueDate: "2022-04-09",
    payerName: "KamalNathan",
    payerAccountNo: "200001020141",
    payeeName: "SunainaPatil",
    payeeAccountNo: "200001020939",
    amount: 1256.0,    
},
{
    transactionRefNo: "123456789012",
    valueDate: "2022-04-09",
    payerName: "VickeyMic",
    payerAccountNo: "200001020111",
    payeeName: "KamleshPatel",
    payeeAccountNo: "200001020099",
    amount: 9999.9,    
},
{
    transactionRefNo: "123456225542",
    valueDate: "2022-04-09",
    payerName: "KiranTaneja",
    payerAccountNo: "200001020181",
    payeeName: "KailashGupta",
    payeeAccountNo: "200001027999",
    amount: 9529.0,    
}, ] */
   

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  ELEMENT_DATA: Transaction[] = [
    {
      transactionRefNo: "123456789001",
      valueDate: "2022-04-09",
      payerName: "KamalNathan",
      payerAccountNo: "200001020141",
      payeeName: "SunainaPatil",
      payeeAccountNo: "200001020939",
      amount: 1256.0,
      validStatus: "Pass",
      sanctionStatus: "Pass",
      // sanctionFailMessage: "Pass",
      // validationFailMessage: "Pass",
      
  },
    {
        transactionRefNo: "123456789001",
        valueDate: "2022-04-09",
        payerName: "KamalNathan",
        payerAccountNo: "200001020141",
        payeeName: "SunainaPatil",
        payeeAccountNo: "200001020939",
        amount: 1256.0,
        validStatus: "Fail",
        sanctionStatus: "Pass",
        // sanctionFailMessage: "Pass",
        // validationFailMessage: "Pass",
        
    },{
      transactionRefNo: "156456789012",
      valueDate: "2022-04-09",
      payerName: "VimalSukumar",
      payerAccountNo: "200001060111",
      payeeName: "MohiniChawal",
      payeeAccountNo: "200001520999",
      amount: 329.0,  
      validStatus: "Fail",
      sanctionStatus: "Pass",  
  },
  {
      transactionRefNo: "123948589012",
      valueDate: "2022-04-09",
      payerName: "KaranKumar",
      payerAccountNo: "200001620999",
      payeeName: "AnandiGupta",
      payeeAccountNo: "200001020939",
      amount: 10000.0,   
      validStatus: "Fail",
      sanctionStatus: "Pass",  
  },
  ]

  displayedColumns: string[] = ['transactionRefNo', 'valueDate', 'payerName', 'payerAccountNo', 'payeeName', 'validStatus'];
 
  empFilters: EmpFilter[]=[];
 Validation: string[]=['All','Pass','Fail'];
  Sanction: string[]=['All','Pass','Fail'];

  defaultValue = "All";

  filterDictionary= new Map<string,string>();

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  dataSourceFilters = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSourceFilters.paginator = this.paginator;
    this.dataSourceFilters.sort = this.sort;
  }

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
   
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {

    this.empFilters.push({name:'validStatus',options:this.Validation,defaultValue:this.defaultValue});
    this.empFilters.push({name:'sanctionStatus',options:this.Sanction,defaultValue:this.defaultValue});
  
    this.dataSourceFilters.filterPredicate = function (record,filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Transaction] == value); 
        if(!isMatch) return false;
      }
      return isMatch;
    }
    

    
  }

  applyEmpFilter(ob:MatSelectChange,empfilter:EmpFilter) {

    this.filterDictionary.set(empfilter.name,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    
    this.dataSourceFilters.filter = jsonString;
    //console.log(this.filterValues);
  }

  
}

// export class TableBasicExample {
  
// }
/* 
<!-- Id Column -->
    <ng-container matColumnDef="transactionRefNo">
      <th mat-header-cell *matHeaderCellDef> transactionRefNo. </th>
      <td mat-cell *matCellDef="let row"> {{row.transactionRefNo}} </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="valueDate">
      <th mat-header-cell *matHeaderCellDef> valueDate </th>
      <td mat-cell *matCellDef="let row"> {{row.valueDate}} </td>
    </ng-container>
  
    <!-- Weight Column -->
    <ng-container matColumnDef="payerName">
      <th mat-header-cell *matHeaderCellDef> payerName</th>
      <td mat-cell *matCellDef="let row"> {{row.payerName}} </td>
    </ng-container>
  
    <!-- Symbol Column -->
    <ng-container matColumnDef="payerAccountNumber">
      <th mat-header-cell *matHeaderCellDef> payerAccountNumber</th>
      <td mat-cell *matCellDef="let row"> {{row.payerAccountNumber}} </td>
    </ng-container>

    <!-- Symbol Column -->
    <ng-container matColumnDef="payeeName">
        <th mat-header-cell *matHeaderCellDef> payeeName</th>
        <td mat-cell *matCellDef="let row"> {{row.payeeName}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="payeeAccountNumber">
        <th mat-header-cell *matHeaderCellDef> payeeAccountNumber</th>
        <td mat-cell *matCellDef="let row"> {{row.payeeAccountNumber}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef> amount</th>
        <td mat-cell *matCellDef="let row"> {{row.amount}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="validationStatus">
        <th mat-header-cell *matHeaderCellDef> validationStatus</th>
        <td mat-cell *matCellDef="let row"> {{row.validationStatus}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="sanctioningStatus">
        <th mat-header-cell *matHeaderCellDef> sanctioningStatus</th>
        <td mat-cell *matCellDef="let row"> {{row.sanctioningStatus}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="sanctionFailMessage">
        <th mat-header-cell *matHeaderCellDef> sanctionFailMessage</th>
        <td mat-cell *matCellDef="let row"> {{row.sanctionFailMessage}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="validationFailMessage">
        <th mat-header-cell *matHeaderCellDef> validationFailMessage</th>
        <td mat-cell *matCellDef="let row"> {{row.validationFailMessage}} </td>
      </ng-container>

      <!-- Symbol Column -->
    <ng-container matColumnDef="filename">
        <th mat-header-cell *matHeaderCellDef> filename</th>
        <td mat-cell *matCellDef="let row"> {{row.filename}} </td>
      </ng-container> */