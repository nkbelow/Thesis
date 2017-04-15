import React from 'react';

class ProductCategoryRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false
    }
  }
  render () {
    return (
      <tr>
        <td>{this.props.category}</td>    
      </tr>
    )
  }
}

export default ProductCategoryRow;