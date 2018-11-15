import React from 'react';
let logo = 'googlelogo_color_272x92dp.png';
class Hello extends React.Component {
	
	constructor() {
		super();
		this.state = {
			initialState: 'initialState',
			switchh: false,
			count: 1
		}

		this.changeInitialState = this.changeInitialState.bind(this); 
		this.mofiz = 'mofixxxx';


	};

	changeInitialState () {
		this.setState ({
			initialState: 'dretye',
			switchh: !this.state.switchh,
			count: this.state.count + 1
		});
		console.log(this, '23');

	};


	render () {
		let balsal;
		if (this.state.switchh) {
			 balsal = '00000000';
		}

		else {
			 balsal = '00000000';
		}
		return (
			<div>
				<Header />
					<h2 className="title" onClick={this.changeInitialState}>Hello {this.state.initialState}
					 { this.state.count } {this.mofiz}</h2>
					 <hr />
				<Footer />
			</div>
		);
	}
}

class Header extends React.Component {
	render () {
		return (
			<div> 
				 <h2>Header </h2>
				 <Logo />
			 <hr />
			</div>
		);
	}
}
class Logo extends React.Component {
	render () {
		return (
			<img src={logo} />
		);
	}
}
class Footer extends React.Component {
	balsal () {
		let a = 2;
		console.log(a);
	}
	render () {
		return (
			<div> <h2 onClick={this.balsal}>Footer </h2>
			 <hr />
			</div>
		);
	}
}
export default Hello;