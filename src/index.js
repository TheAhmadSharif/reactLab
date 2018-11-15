import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Hello extends Component {
	constructor () {
		super();

		this.state= {
			articles: [
				{id: 1, 'title': 'This is one'},
				{id: 2, 'title': 'This is two'},
				{id: 3, 'title': 'This is three'}
			]
		};
	}

	render () {
		const { articles } = this.state;
		return (
			<div>
				<ul>
					{articles.map(el => <li> {el.id}: {el.title}</li>)}
				</ul>
			</div>
		);
	}
}





ReactDOM.render(
  <Hello />,
  document.getElementById('root')
);