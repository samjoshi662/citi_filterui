import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelectChange } from '@angular/material/select';

export interface Employee {
  id : number,	
  // firstname:string,	
  // lastname:string,	
  // email:string,
  gender:string,	
  jobtitle:string,
  department:string
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

@Component({
  selector: 'app-mat-table-filter',
  templateUrl: './mat-table-filter.component.html',
  styleUrls: ['./mat-table-filter.component.css']
})


export class MatTableFilterComponent implements OnInit {

  displayedColumns: string[] = ['id', 'gender','jobtitle','department'];
 
  EmpData : Employee[] =[{"id":1,"gender":"Female","department":"Support","jobtitle":"Support Analyst"},
  {"id":2,"gender":"Female","department":"Support","jobtitle":"Support Analyst"}];
  
  genders: string[]=['All','Male','Female'];
  jobtitles: string[]=['All','Support Analyst','Project Manager','Senior officer','Software Engineer'];
  departments: string[]=['All','Support','Human Resources','Marketing','Engineering'];
  empFilters: EmpFilter[]=[];
  
  defaultValue = "All";

  filterDictionary= new Map<string,string>();

  
  
  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceFilters = new MatTableDataSource(this.EmpData);

  constructor() { 
  }


  ngOnInit(): void {

    this.empFilters.push({name:'gender',options:this.genders,defaultValue:this.defaultValue});
    this.empFilters.push({name:'jobtitle',options:this.jobtitles,defaultValue:this.defaultValue});
    this.empFilters.push({name:'department',options:this.departments,defaultValue:this.defaultValue});

    this.dataSourceFilters.filterPredicate = function (record,filter) {
      debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Employee] == value); 
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
