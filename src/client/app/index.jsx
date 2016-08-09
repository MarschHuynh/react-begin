import React from 'react';
import {render} from 'react-dom';
import ContactList from './ContactList.jsx';

class App extends React.Component {
  render () {
  	var data = [
    	{name: 'Thien', phone: '123123123', job: "Founder/CEO"},
    	{name: 'Marsch', phone: '9383840234', job: "Project Manager"},
    	{name: 'Marsch 2', phone: '9383840234', job: "Project Manager"},
    	{name: 'Marsch 3', phone: '9383840234', job: "Project Manager"},
	]
    return (
      <div>
        <ContactList data = {data}/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
