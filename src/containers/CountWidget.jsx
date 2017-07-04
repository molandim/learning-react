import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount } from '../actions/actions';
import CountWidget from '../components/CountWidget';

/* old store.getState() */
function mapStateToProps(state){
  return {count: state.count};
}
/* old store.dispatch */
function mapDispatchToProps(dispatch){
  return {
    //handleClick: ()=> {console.log('I was clicked')}
    handleClick: ()=> {dispatch(incrementCount())}
  }
}

let CountWidgetContainer = connect(mapStateToProps, mapDispatchToProps)(CountWidget);
export default CountWidgetContainer;

/*export default class CountWidgetContainer extends Component {

constructor(props) {
    super(props);
    
    this.state = {
      count: props.store.getState().count
    }
      console.log('this.state: ', this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  
  }

  componentDidMount(){
    this.props.store.subscribe(this.handleChange);
  }

  handleChange(){
    this.setState({
      count:this.props.store.getState().count
    })
  }

  handleClick(){
    let action = incrementCount();
    this.props.store.dispatch(action);
  }
  
  render(){
      return <CountWidget count={this.state.count} handleClick={this.handleClick} />
  }

}*/