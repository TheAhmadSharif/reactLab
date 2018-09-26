import React from 'react';
let logo = 'googlelogo_color_272x92dp.png';
class Hello extends React.Component {
	render () {
		let name = 'Ahmad Sharif';
		return (
			<div>
				<Header />
					<h2>Hello { name }</h2>
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