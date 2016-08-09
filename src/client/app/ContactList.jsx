import React from 'react';

class ContactList extends React.Component{
  constructor(props) {
    super(props);
  
    this.state = {
      filterText: ''
    };
  }

  handleUserInput(filterText){
    this.setState({
      filterText: filterText
    });
  }

  render(){
    return (
      <div>
        <SearchBar
          filterText = {this.state.filterText}
          onUserInput = {this.handleUserInput.bind(this)}>
        </SearchBar>
        <ListContact
          data = {this.props.data} 
          filterText = {this.state.filterText}>
        </ListContact>
      </div>
    )
  }
}

class ListContact extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    var data = this.props.data;
    var rows = [];
    this.props.data.forEach((item) =>{
      if (item.name.toLowerCase().indexOf(this.props.filterText.toLowerCase())=== -1){
        return;
      }
      rows.push(<Row data = {item} />)
    });
    return (
      <div className="col-md-12 listWrap">
        <div className="searchable-container">
          {rows}
        </div>
      </div>
    );
  }
};

class Row extends React.Component {

  render() {
    var data = this.props.data;
    return (
      <div className="items col-xs-12 col-md-6 col-lg-4 clearfix">
         <div className="info-block block-info clearfix">
              <div className="square-box pull-left">
                  <span className="glyphicon glyphicon-user glyphicon-lg"></span>
              </div>
              <h4>Name: {data.name}</h4>
              <p>Job: {data.job}</p>
              <span>Phone: {data.phone}</span>
          </div>
      </div>
    );
  }
}

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      filterText: ''
    };
  };

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    )
  };

  render() {
    return(
      <form className="searchBar">
        <input 
          type="text" 
          placeholder="Search ..." 
          onChange={this.handleChange.bind(this)}
          ref="filterTextInput"/>
      </form>
    );
  }
}

export default ContactList;
