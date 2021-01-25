
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'xtAssignmentApp';
  cardData = [];
  selectedFilterName = '';
  selectedFilterValue = '';
  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['filtername'] && params['value']) {
        this.homeService.getFilteredData().subscribe(res => {
          this.generateCardData(res);
        });
      }
      else {
        this.homeService.getRecordsWithoutFilter().subscribe((res) => {
          this.generateCardData(res)
        })
      }
    })
  }
  generateCardData(data) {
    this.cardData = [];
    data.forEach((value) => {
      const obj = {
      }
      obj['missionName'] = value?.mission_name ? value.mission_name : '';
      obj['launchSuccess'] = value?.launch_success ? value.launch_success : false;
      obj['launchYear'] = value.launch_year;
      obj['succesfulLanding'] = value?.rocket?.first_stage?.cores[0]?.land_success ? true : false;
      obj['missionId'] = value.mission_id;
      obj['imageLink'] = value.links.mission_patch;
      this.cardData.push(obj);
    })
  }
  applyFilters(filter) {
    if (this.homeService.criteria.length === 0) {
      this.homeService.criteria.push(filter);
    }
    else {
      this.homeService.criteria.forEach((criteria, index) => {
        if (criteria.filterName === filter.filterName) {
          if (criteria.value === filter.value.toString()) {
            this.homeService.criteria.splice(index, 1)
          }
          else {
            this.homeService.criteria.splice(index, 1);
            this.homeService.criteria.push(filter);
          }
        }
        else {
          if (!filter['filterDeselection'] && filter['filterDeselection'] != true) {
            this.homeService.criteria.push(filter);
          }

        }
      })
      const filteredCriteria = this.homeService.criteria.reduce((acc, current) => {
        const x = acc.find(item => item.filterName === current.filterName && item.value === current.value)
        if (!x) {
          return acc.concat([current])
        }
        else {
          return acc;
        }
      }, [])
      this.homeService.criteria = filteredCriteria;
    }
    if (filter['filterDeselection'] && filter['filterDeselection'] === true) {
      if (this.homeService.criteria.length === 0) {
        this.router.navigate(['home']);
      }
      else {
        this.homeService.getFilteredData().subscribe(res => {
          this.generateCardData(res);
        })
      }
    }
    else {
      this.router.navigate(['filter', { filtername: filter.filterName, value: filter.value }])
    }

  }
}
