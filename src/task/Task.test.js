/**
 * Created by chalosalvador on 2019-06-09
 */
import React from 'react';
import renderer from 'react-test-renderer';
import TaskGrid from './TaskGrid';
import TaskAPI from './TaskAPI';

jest.mock( './TaskAPI' );
const mockTasks = [
  {
    'project': 2,
    'description': 'Substitute Crème fraîche with evaporated milk in ice-cream products',
    'start date': '2013-12-28T00:00:00+00:00',
    'category': 'Office supplies',
    'responsible': 'Clark Kent',
    'savings amount': 3722.41684,
    'currency': 'NULL',
    'complexity': 'Moderate'
  },
  {
    'project': 1,
    'description': 'Decrease production related non-categorized side costs',
    'start date': '2013-06-14T00:00:00+00:00',
    'category': 'Dairy',
    'responsible': 'Daisy Milks',
    'savings amount': 5583.62526,
    'currency': 'USD',
    'complexity': 'Hazardous'
  }
];


describe( 'TaskAPI', () => {
  test( 'if Tasks.getAll is mocked', async() => {
    const tasks = await TaskAPI.getAll();
    expect( tasks ).toEqual( mockTasks );
  } );
} );

describe( 'TaskGrid', () => {

  test( 'TaskGrid renders data correctly', async() => {
    const component = renderer.create( <TaskGrid /> );
    await TaskAPI.getAll();

    let tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
  } );

  test( 'TaskGrid searches correctly', async() => {
    const component = renderer.create( <TaskGrid /> );
    await TaskAPI.getAll();

    component.getInstance().handleSearch( 'substitute' );
    // re-rendering
    const tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
  } );

} );