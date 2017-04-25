import { UPDATE_COMBINATION_SELECTIONS, UPDATE_SINGLE_SELECTION } from '../actions/filters.js'

let initialState = {
  activities: [{
    name: 'Any',
    isSelected: false
  },
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
    name: 'Interpretive Programs',
    isSelected: false
  },
  {
    name: 'Picnicking',
    isSelected: false
  },
  {
    name: 'Snorkeling',
    isSelected: false
  },
  {
    name: 'Water Sports',
    isSelected: false
  },
  {
    name: 'Visitor Center',
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
  }]}


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
    default:
      return state
  }
}