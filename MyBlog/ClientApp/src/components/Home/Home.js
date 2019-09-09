import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Aidan's Devsite!</h1>
        <p>Here is where I show off all my projects, aspirations and stuff</p>
        <p>So what are my plans for this website?</p>
        <ul>
          <li>Create a page to display my achievements!</li>
          <li>Write a blog post about why testing is a selfless way of programming!</li>
          <li>Do some cool stuff with C#</li>
        </ul>
      </div>
    );
  }
}
