import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

describe( 'App', () => {
  it( 'renders without crashing', () => {
    const component = renderer.create( <App /> );
    const tree = component.toJSON();
    expect( tree ).toMatchSnapshot();
  } );

} );
