import React from 'react';

class InputSearch extends React.Component {
  state = {term: ""};

  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term);
  }
  render(){
    return (
      <div className="ui segment">
        <div className="ui search">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label>Search Image</label>
              <input type="text" value={this.state.term} placeholder="Search" onChange={e => this.setState({term: e.target.value})}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default InputSearch;
