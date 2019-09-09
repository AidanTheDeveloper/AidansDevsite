import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Aidan's Devsite!</h1>
        <p>Here is where I show off all my projects, aspirations and stuff</p>
        <ul>
          <li><a href='/counter'>This is a link to the counter page! I haven't made any other interesting page yet</a></li>
          <li><a href='/fetch-data'>And here we have a link to the fetch page, nothing great here either!</a></li>
          <li><a href='/'>This is a link to the page that we're currently on, not much point clicking here</a></li>
        </ul>
      </div>
    );
  }
}
