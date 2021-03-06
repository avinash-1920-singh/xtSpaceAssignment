import { Component, ElementRef, Input, OnInit, Output, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  constructor(public homeService:HomeService,private renderer:Renderer2){

  }
  @Input() activeTab
  @Output() filterApplied=new EventEmitter();
  @ViewChildren('filters') filters:QueryList<ElementRef>
  dateFilter=[
    {
      filterName:'launch_year',
      value:'2006',
      id:2006,
    },
    {
      filterName:'launch_year',
      value:'2007',
      id:2007,
    },
    {
      filterName:'launch_year',
      value:'2008',
      id:2008,
    },
    {
      filterName:'launch_year',
      value:'2009',
      id:2009,
    },
    {
      filterName:'launch_year',
      value:'2010',
      id:2010,
    },
    {
      filterName:'launch_year',
      value:'2012',
      id:2012,
    },
    {
      filterName:'launch_year',
      value:'2013',
      id:2013
    },
    {
      filterName:'launch_year',
      value:'2014',
      id:2014
    },
    {
      filterName:'launch_year',
      value:'2015',
      id:2015
    },
    {
      filterName:'launch_year',
      value:'2016',
      id:2016
    },
    {
      filterName:'launch_year',
      value:'2017',
      id:2017
    },
    {
      filterName:'launch_year',
      value:'2018',
      id:2018
    },
    {
      filterName:'launch_year',
      value:'2019',
      id:2019
    },
    {
      filterName:'launch_year',
      value:'2020',
      id:2020
    } 
  ]
  launchFilter=[
    {
      filterName:'launch_success',
      value:'true',
      id:'True'
    },
    {
      filterName:'launch_success',
      value:'false',
      id:'False'
    }
  ]
  landFilter=[
    {
      filterName:'land_success',
      value:'true',
      id:'True'
    },
    {
      filterName:'land_success',
      value:'false',
      id:'False'
    }
  ]
  staticFilter=[
    {
      'filterText':'Launch Year',
      'data':[
        {
          filterName:'launch_year',
          value:'2006',
          id:2006,
        },
        {
          filterName:'launch_year',
          value:'2007',
          id:2007,
        },
        {
          filterName:'launch_year',
          value:'2008',
          id:2008,
        },
        {
          filterName:'launch_year',
          value:'2009',
          id:2009,
        },
        {
          filterName:'launch_year',
          value:'2010',
          id:2010,
        },
        {
          filterName:'launch_year',
          value:'2012',
          id:2012,
        },
        {
          filterName:'launch_year',
          value:'2013',
          id:2013
        },
        {
          filterName:'launch_year',
          value:'2014',
          id:2014
        },
        {
          filterName:'launch_year',
          value:'2015',
          id:2015
        },
        {
          filterName:'launch_year',
          value:'2016',
          id:2016
        },
        {
          filterName:'launch_year',
          value:'2017',
          id:2017
        },
        {
          filterName:'launch_year',
          value:'2018',
          id:2018
        },
        {
          filterName:'launch_year',
          value:'2019',
          id:2019
        },
        {
          filterName:'launch_year',
          value:'2020',
          id:2020
        }    
      ]
    },
    {
      'filterText':'Successful Launch',
      'data':[
        {
          filterName:'launch_success',
          value:'true',
          id:'True'
        },
        {
          filterName:'launch_success',
          value:'false',
          id:'False'
        }
      ]
    },
    {
      'filterText':'Successful Landing',
      'data':[
        {
          filterName:'land_success',
          value:'true',
          id:'True'
        },
        {
          filterName:'land_success',
          value:'false',
          id:'False'
        }
      ]
    }
  ]
ngOnInit(){
  console.log(this.activeTab)
}
  applyFilter(filter,index?){
    filter['active']=true;
   this.homeService.criteria.forEach((criteria)=>{
     if(criteria.filterName===filter.filterName && criteria.value===filter.value.toString() && criteria.id===filter.id){
       filter['filterDeselection']=true;
       if(filter.filterName==='launch_year'){
         this.homeService.yearactiveTab=''
       }
       else if(filter.filterName==='launch_success'){
         this.homeService.launcYearActive=''
       }
       else if(filter.filterName==='land_success'){
this.homeService.landingActiveTab=''
       }
       console.log(filter)
     }
   })
  //  if(filter['filterDeselection']){
  //   this.renderer.setStyle(this.filters.toArray()[index].nativeElement,'background-color','#adff2f');
  //  }
  //  else{
  //   setTimeout(()=>{
  //     this.renderer.setStyle(this.filters.toArray()[index].nativeElement,'background-color','#32cd32');
  //   })
    
  //  }
    this.filterApplied.emit(filter);
  }
}
