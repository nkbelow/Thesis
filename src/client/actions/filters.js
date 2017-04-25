export const UPDATE_COMBINATION_SELECTIONS = 'UPDATE_COMBINATION_SELECTIONS';
export const UPDATE_SINGLE_SELECTION = 'UPDATE_SINGLE_SELECTION';

// dispatch to toggle the selection

export const onCombinationFilterClick = (filter) => {
  return {
    'type': UPDATE_COMBINATION_SELECTIONS,
    'name': filter
  }
}

export const onSingleFilterClick = (filter) => {
  return {
    'type': UPDATE_SINGLE_SELECTION,
    'name': filter
  }
}