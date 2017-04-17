import React from 'react';

class ProductCategoryRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
    this.style = {
      'font-family':'Arial',
      'font-weight':'bold',
      'fontSize': '40',
      'color': 'black',
    }
  }
  render () {
    return (
      <tr>
        <td style={this.style} >{this.props.category}</td>    
      </tr>
    )
  }
}

export default ProductCategoryRow;