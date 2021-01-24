import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  staticYearFilter=[
   
  ]
  staticFilter=[
    {
      'filterText':'Launch Year',
      'data':[
        {
          filterName:'launchYear',
          value:2012
        },
        {
          filterName:'launchYear',
          value:2013
        },
        {
          filterName:'launchYear',
          value:2014
        },
        {
          filterName:'launchYear',
          value:2015
        },
        {
          filterName:'launchYear',
          value:2016
        },
        {
          filterName:'launchYear',
          value:2017
        },
        {
          filterName:'launchYear',
          value:2018
        },
        {
          filterName:'launchYear',
          value:2019
        },
        {
          filterName:'launchYear',
          value:2020
        }    
      ]
    },
    {
      'filterText':'Successful Launch',
      'data':[
        {
          filterName:'launch_success',
          value:'True'
        },
        {
          filterName:'launch_success',
          value:'False'
        }
      ]
    },
    {
      'filterText':'Successful Landing',
      'data':[
        {
          filterName:'land_success',
          value:'True'
        },
        {
          filterName:'land_success',
          value:'False'
        }
      ]
    }
  ]
}
