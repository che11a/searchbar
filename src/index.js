import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import InputSearch from './InputSearchBar';
import 'semantic-ui-css/semantic.min.css';
import ImageList from "./ImageList";

class App extends React.Component {
  state = {images : []};
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {
        query: term
      },
      headers: {
        Authorization: 'Client-ID 6RcDVYpMF95zA_IUTbkLh-B_vwy4LuLbyU3-4Tw1pyE'
      }

    })
    this.setState({images: response.data.results})
    // console.log(response.data.results);
  }
  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
        <InputSearch onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
      )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
