import React from 'react';
import { classify } from './utils';
export default class Button extends React.Component{
    render(){
        const Tag = this.props.href?'a':'button'
        const className = classify('btn', this.props.className);
        return <p><Tag {...this.props} className={className}>{this.props.label}</Tag></p>
    }
}