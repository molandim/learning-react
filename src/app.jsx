import React from 'react';
import ReactDOM from 'react-dom';
import CountWidgetContainer from './containers/CountWidget';
import constants from './constants/constants';

export class App extends React.Component {
 


  render(){
    return <div>
     <CountWidgetContainer store={this.props.store} />
    </div>
  }
}

