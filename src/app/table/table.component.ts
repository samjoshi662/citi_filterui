import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Transaction {
 
  transactionRefNo: string;
  valueDate: string;
  payerName: string;
  payerAccountNo: string;
  payeeName: string;
  payeeAccountNo: string;
  amount: number;
  //validStatus: string;
  // sanctionStatus: string;
  // sanctionFailMessage: string;
  // validationFailMessage: string;

}

const ELEMENT_DATA: Transaction[] = [
  {
    transactionRefNo: "123456789001",
    valueDate: "2022-04-09",
    payerName: "KamalNathan",
    payerAccountNo: "200001020141",
    payeeName: "SunainaPatil",
    payeeAccountNo: "200001020939",
    amount: 1256.0,
    //validStatus: "Pass",
    //sanctionStatus: "Pass",
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
      //validStatus: "Fail",
      // sanctionStatus: "Pass",
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
},
{
    transactionRefNo: "123948589012",
    valueDate: "2022-04-09",
    payerName: "KaranKumar",
    payerAccountNo: "200001620999",
    payeeName: "AnandiGupta",
    payeeAccountNo: "200001020939",
    amount: 10000.0,    
},
{
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
},]
   

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  displayedColumns: string[] = ['transactionRefNo', 'valueDate', 'payerName', 'payerAccountNo', 'payeeName', 'payerAccountNo'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
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