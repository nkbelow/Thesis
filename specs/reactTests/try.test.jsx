import React from 'react';
import ReactDOM from 'react-dom';
import Test from '../../src/client/app/try.jsx';
import {shallow} from 'enzyme';

/*this tests that the mounts our component
and checks that it doesn't throw an excpetion during rendering */
describe('Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Test />, div);
  })
})

/*enzyme allows up to test that our component behaves as it should 
and produces the correct output */
describe('render', () => {
  it('should render dummy component', () => {
    const test = shallow(<Test />);
    const words = <p className='test'>Hello World </p>;

    expect(test.contains(words)).toEqual
  })
})

