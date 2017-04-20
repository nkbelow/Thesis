export {campgrounds} from './campgrounds.js';
import axios from 'axios';

export const getCampgrounds = () => {
  if (this.props.park && this.props.campgrounds == null) {
      axios.get('/api/campgrounds', {
        params: {
          parkId: this.state.park.id
          }
        })
      .then(res => {
        this.setState({campgrounds: res.data})

      })
      .catch(err=> console.err(err))
    }
}