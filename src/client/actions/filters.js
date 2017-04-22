export const UPDATE_ACTIVITIES_SELECTION = 'UPDATE_ACTIVITIES_SELECTION';
export const UPDATE_POPULARITY_SELECTION = 'UPDATE_POPULARITY_SELECTION';

// dispatch to toggle the selection
export const onFilterClick = (filter) => {
  return {
    'type': UPDATE_ACTIVITIES_SELECTION,
    'name': filter
  }
}


