import React from 'react';
import {Grid, Dimmer, Button, Rating} from 'semantic-ui-react'

class LodgingsListItem extends React.Component {
  constructor(props) {
    super(props)
      this.state = {active: false}
  }
  handleShow() {
    this.setState({ active: true })
  }
  handleHide() {
    this.setState({ active: false })
  }
  render() {
  return (
    <div className='imagewrap'>
    <Dimmer.Dimmable dimmed={this.state.active}>
    <Dimmer active={this.state.active} onClickOutside={this.handleHide.bind(this)} >
    <div><Rating icon='star' rating={+this.props.lodge.rating} maxRating={5} /></div>
    <div> {this.props.lodge.name}</div>
    <div>{this.props.lodge.website && <a href={this.props.lodge.website}> Website </a>}</div>
    </Dimmer>
    <img className='lodgingImage' onClick={this.handleShow.bind(this)} src={`https://res.cloudinary.com/djzaih6fz/image/upload/lodging${this.props.id}.jpeg`} />
    </Dimmer.Dimmable>

    <Button className='button1' size='mini' content='Show Details' onClick={this.handleShow.bind(this)} />
    </div>
    )
  }
}

export default LodgingsListItem;