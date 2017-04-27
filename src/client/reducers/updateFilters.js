import { UPDATE_COMBINATION_SELECTIONS, UPDATE_SINGLE_SELECTION, ON_ACTIVITIES_HOVER } from '../actions/filters.js'

let initialState = {
  activities: [
  {
    name: 'Auto Touring',
    isSelected: false
  },
  {
    name: 'Biking',
    isSelected: false
  },
  {
    name: 'Climbing',
    isSelected: false
  },
  {
    name: 'Fishing',
    isSelected: false
  },
  {
    name: 'Horseback Riding',
    isSelected: false
  },
  {
    name: 'Hiking',
    isSelected: false
  },
  {
    name: 'Wildlife Viewing',
    isSelected: false
  },
  {
    name: 'Photography',
    isSelected: false
  },
  {
    name: 'Camping',
    isSelected: false
  },
  {
    name: 'Boating',
    isSelected: false
  },
  {
    name: 'Swimming',
    isSelected: false
  },
  {
    name: 'Diving',
    isSelected: false
  },
  {
    name: 'Hunting',
    isSelected: false
  },
  {
    name: 'Paddling',
    isSelected: false
  },
  {
    name: 'Snorkeling',
    isSelected: false
  },
  {
    name: 'Horse Camping',
    isSelected: false
  }],
  popularity: [{
    name: 'Most Visited',
    isSelected: false
  },
  {
    name: 'Least Visited',
    isSelected: false
  }],
  activitiesHover: {
    'Auto Touring': [],
    'Biking': [],
    'Climbing': [],
    'Fishing': [],
    'Horseback Riding': [],
    'Hiking': [],
    'Wildlife Viewing': [],
    'Photography': [],
    'Camping': [],
    'Boating': [],
    'Swimming': [],
    'Diving': [],
    'Hunting': [],
    'Paddling': [],
    'Snorkeling': [],
    'Horse Camping': []
  }}


// reducer for the filters
export const updateFiltersSelections = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_COMBINATION_SELECTIONS:
      return Object.assign({}, state, {activities: state.activities.map(filter => {
        if(filter.name !== action.name) {
          return filter;
        }

        return {
          name: filter.name,
          isSelected: !filter.isSelected
        };
      })})
    case UPDATE_SINGLE_SELECTION:
      return Object.assign({}, state, {popularity: state.popularity.map(filter => {
        if (filter.name !== action.name) {
          return {
              name: filter.name,
              isSelected: false
          }
        }

        return {
          name: filter.name,
          isSelected: !filter.isSelected
        };
      })})
    case ON_ACTIVITIES_HOVER: 
      return Object.assign({}, state, {
        'activitiesHover': action.activitiesHover
      })
    default:
      return state
  }
}