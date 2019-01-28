import LinkedList from '../src/linkedLists/linkedlist';
import React, { Component, Fragment } from 'react';
import dateFormat from 'dateformat';
import MyCard from './card';
const now = new Date();
const list = new LinkedList();


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      b: '',
      c: '',
      d: '',
      ll: list,
      date: dateFormat(now,'mmm dd, yyyy'),
    };
    const initialState = this.defaultState;

    this.state = {...initialState}
  }
  // setDate = (e) => {
  //     e.preventDefault();
  //     let day = new Date(e);
  //     this.setState({date: day.toLocaleDateString("en-US")});
  // }

  reverse = () => {
      console.log(this.state.a);
      let str = this.state.a;
      let rev;
    str.split('').reduce((a,v) => {
      return rev = v + a;
    }, '');
    this.setState({a: rev});
     }
  addToList = () => {
    let listItem = this.state.b;
    // let list = new LinkedList();
    list.append(listItem); 
    this.setState({ll: list.serialize()});
  }

  onSubmit = (e) => {
      e.preventDefault();
    //   this.props.onComplete(this.state);
    //   this.props.viewChange();
      this.setState({...this.defaultState});
  };
  onChange = (e) => {
    const val =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  const changedBit = {
    [e.target.name]: val
  };
  this.setState(changedBit);
  }

  render() {
    // let myList = new LinkedList();
    //   myList.append('z')
    return(
      <Fragment>
        <div>
        <fieldset>
          <form onSubmit={this.onSubmit} onChange={this.onChange}>
            <label>a
            <input name="a" type="text" value={this.state.a}/>
            </label>
            <label>b add to list
            <input name="b" type="text" value={this.state.b}/>
            </label>
            <label>c
            <input name="c" type="text" value={this.state.c}/>
            </label>
            <label>d
            <input name="d" type="text" value = {this.state.d}/>
            </label>
            <button>submit</button>
          </form>
        </fieldset>
        </div>
        <h3>{this.state.a}</h3>
        <button onClick={this.reverse}>reverse a string</button>
        <h3>{this.state.ll}</h3>
        <button onClick={this.addToList}>add to list</button>
        <MyCard/>
      </Fragment>
    );
  
}
}