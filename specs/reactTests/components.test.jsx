import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render} from 'enzyme';
import configureMockStore from 'redux-mock-store'

import activitiesList from '../../src/client/app/activitiesList.jsx'
import {List} from 'semantic-ui-react';
// import App from '../../src/client/app/App.jsx'
import FilterRow from '../../src/client/app/FilterRow.jsx'
import historicalWeatherDataDropDown from '../../src/client/app/historicalWeatherDataDropDown.jsx'
// import map from '../../src/client/app/Map.jsx'
// import MapBox from '../../src/client/app/MapBox.jsx'
import ParkItem from '../../src/client/app/ParkItem.jsx'
import ParkList from '../../src/client/app/ParkList.jsx'
// // import ParkView from '../../src/client/app/ParkView.jsx'
import SearchBar from '../../src/client/app/SearchBar.jsx'
import sidebarFilters from '../../src/client/app/sidebarFilters.jsx'
// // import singlePageMapView from '../../src/client/app/singlePageMapView.jsx'
import singlePageNavBar from '../../src/client/app/singlePageNavBar.jsx'
import tenDayForecastList from '../../src/client/app/tenDayForecastList.jsx'
import tenDayForecastListItem from '../../src/client/app/tenDayForecastListItem.jsx'

const fun = jest.fn()
const mockStore = configureMockStore()
const store = mockStore({})

const activities = mount(<activitiesList activities = {[]}/>);
// const app = mount(<App filters = {[]} parks = {[]} visible = {true} />)
const filterRow = mount(<FilterRow store = {store} filters = {[]} updateFilters = {fun} getParks = {fun} />)
const HistoricalWeatherDataDropDown = mount(<historicalWeatherDataDropDown historicalWeatherData = {[]} park = {{}} getHistoricalData = {fun} />)
// const landingPageMap = mount(<map store = {store} 	popup={[]} parks={[]} addPopup={fun} removePopup={fun} />)
const parkList = mount(<ParkList parks= {[]} />)
const searchBar = mount(<SearchBar />)
const SidebarFilters = mount(<sidebarFilters visible = {true} />)
const SinglePageNavBar = mount(<singlePageNavBar />)
const TenDayForecastList = mount(<tenDayForecastList tenDayForecast = {[]} />)
const TenDayForecastListItem = mount(<tenDayForecastListItem dayForecast = {{}} />)

describe('Components mounting', () => {
		
	it('activities should mount', () => {
    	expect(activities).toBeDefined();
  })

	// it('app should mount', () => {
 //    	expect(app).toBeDefined();
 //  })

 	it('filterRow should mount', () => {
 		expect(filterRow).toBeDefined();
 	})

 	it('Historical weather data drop down should mount', () => {
 		expect(HistoricalWeatherDataDropDown).toBeDefined();
 	})

 	// it('Map should mount', () => {
 	// 	expect(landingPageMap).toBeDefined();
 	// })

 	it('park list should mount', () => {
 		expect(parkList).toBeDefined();
 	})

 	it('search bar should mount', () => {
 		expect(searchBar).toBeDefined();
 	})

 	it('side bar filters should mount', () => {
 		expect(SidebarFilters).toBeDefined();
 	})

 	it('single page nav bar should mount', () => {
 		expect(SinglePageNavBar).toBeDefined();
 	})

 	it('ten day forecast list should mount', () => {
 		expect(tenDayForecastList).toBeDefined();
 	})

 	it('ten day forecast list item should mount', () => {
 		expect(tenDayForecastListItem).toBeDefined();
 	})


});

describe('Components rendering', () => {

	it('activities should render with an activities list', () => {
		const wrapper = shallow(<activitiesList activities = {[]}/>)
		expect(activities.contains(<List></List>)).toBe(true);
	})

	it('Historical weather drop down should render a drop down', () => {
		expect(HistoricalWeatherDataDropDown.find('Dropdown')).toBeDefined()
	})

	it('park list should render a masonry', () => {
		expect(parkList.find('Masonry')).toBeDefined()
	})

	it('search bar should render with an autosuggest', () => {
		expect(searchBar.find('Autosuggest')).toBeDefined()
	})

	it('side bar filters should mount', () => {
		expect(SidebarFilters.find('somethingRandom')).toBeDefined()
	})

})




