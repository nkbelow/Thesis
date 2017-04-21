export const UPDATE_ACTIVITIES_SELECTION = 'UPDATE_ACTIVITIES_SELECTION';

// dispatch to toggle the selection
export const onFilterClick = (filter) => {
  return {
    'type': UPDATE_ACTIVITIES_SELECTION,
    'name': filter
  }
}
