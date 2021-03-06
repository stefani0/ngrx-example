import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  AutoUnsubscribe } from 'take-while-alive';
import { Project } from '../../models/project.model';
import { Observable } from 'rxjs';
import { Order } from 'src/app/systems/models/order';
import { AppState } from 'src/shared/store/models/app-state.model';
import { LoadProjectsAction } from 'src/app/systems/store/actions/project.action';



@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

@AutoUnsubscribe()
export class GuideComponent implements OnInit {


  selectedProject: Project;

  orders$: Observable<Order[]>;


  constructor(
    private store$: Store<AppState>
 
  ) {
  
  }

  ngOnInit() {


     this.store$.dispatch(new LoadProjectsAction("", 1));
     this.store$.select('projectState').subscribe((state => console.log('state here', state)))


  }






}
