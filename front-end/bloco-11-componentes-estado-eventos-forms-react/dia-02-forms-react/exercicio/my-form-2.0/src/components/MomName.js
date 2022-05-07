import React, { Component } from 'react'

class MomName extends Component {
  render() {

    const { mother, onChangeHAndler } = this.props;

    return (
      <form>
        <label>
          Nome da mãe:
          <input 
            type="text"
            name='mother'
            value={mother}
            onChange={onChangeHAndler}
          />
        </label>
      </form>
    )
  }
}

export default MomName