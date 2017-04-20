export const getIndividualPark = (individualPark) => {
  return {
    type: 'GET_INDIVIDUAL_PARK_AND_ACTIVITIES',
    individualPark: individualPark
  }
}

const showFilters = (visible) => {
  return {
    type: 'IS_VISIBLE',
    visible: visible
  }
}

 // axios.get('/api/park', {
 //        params: {
 //          parkcode: this.props.match.params.code
 //        }
 //      })
 //      .then(res => {
 //        this.setState({ park: res.data[1][0], activities: res.data[0]});
 //        })
 //      .catch(err => console.log(err))

 //  }