import { UPDATE_ACTIVITIES_SELECTION } from '../actions/filters.js'

let initialState = [{
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
  },
  {
    name: 'Most Visited',
    isSelected: false
  },
  {
    name: 'Least Visited',
    isSelected: false
  }]


// reducer for the filters
export const updateFiltersSelections = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_ACTIVITIES_SELECTION:
      return state.map(filter => {
        
        if(filter.name !== action.name) {
          return filter;
        }

        return {
          name: filter.name,
          isSelected: !filter.isSelected
        };
      })
    default:
      return state
  }
}