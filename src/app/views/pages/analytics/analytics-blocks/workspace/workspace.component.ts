import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  workStatus: Workspace[];
  startStatus: Workspace[];
  waitStatus: Workspace[];
  workspace: Workspace[] = [
    {
      color: '#F1E92F',
      name: 'Colizium',
      stage: 'work',
      cost: 2415,
      percent: 60
    },
    {
      color: '#FF6900',
      name: 'DoDo pizza',
      stage: 'work',
      cost: 1610,
      percent: 25
    },
    {
      color: '#FAAF18',
      name: 'Burger King',
      stage: 'work',
      cost: 800,
      percent: 20
    },
    {
      color: '#E21E28',
      name: 'Доброцен',
      stage: 'work',
      cost: 400,
      percent: 15
    },
    {
      color: '#545454',
      name: 'Top Gun',
      stage: 'work',
      cost: 200,
      percent: 10
    },
    {
      color: '#070707',
      name: 'Black Star Wear',
      stage: 'work',
      cost: 100,
      percent: 5
    },
    {
      color: '#545454',
      name: 'Top Gun',
      stage: 'start',
      cost: 100,
      percent: 5
    },
    {
      color: '#070707',
      name: 'Black Star Wear',
      stage: 'start',
      cost: 100,
      percent: 5
    },
    {
      color: '#E21E28',
      name: 'Доброцен',
      stage: 'wait',
      cost: 100,
      percent: 5
    },
    {
      color: '#FF6900',
      name: 'DoDo pizza',
      stage: 'wait',
      cost: 100,
      percent: 5
    },
  ];
  constructor() { }

  ngOnInit() {
    this.workStatus = this.workspace.filter(val => {
      return (val.stage === 'work');
    });
    this.startStatus = this.workspace.filter(val => {
      return (val.stage === 'start');
    });
    this.waitStatus = this.workspace.filter(val => {
      return (val.stage === 'wait');
    });
  }

}

interface Workspace {
  color: string;
  stage: string;
  name: string;
  cost: number;
  percent: number;
}
