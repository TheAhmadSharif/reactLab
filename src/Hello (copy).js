import React from 'react';
let MNMLogo = 'http://www.mercurynewmedia.com/images/default-source/logos/mercury-logo-circle-201x201.png';


class Hello extends React.Component {


constructor() {
		super();
		this.state = {
			works: false
		};
		this.changeTitle = this.changeTitle.bind(this);
	}
	changeTitle() {
		this.setState({
			works: !this.state.works
		});
	}
	render() {
		let title = this.state.works ? 'Mercury Works' : 'Mercury New Media'; // Ternary operator
		let link;
		if (this.state.works) {
			link = <MWLink />;
		} else {
			link = <MNMLink />;
		}
		return (
			<div>
				<Header><Logo /></Header>
				<h1>Hello {this.props.name} </h1>} 
				<Main title={title}>
					{ link }
					<div className="form-group">
						<button type="button" className="btn btn-primary" onClick={this.changeTitle}>Change Name</button>
					</div>
				</Main>
				 <Footer><ContactUs /></Footer> 
         </div>
		);
	}


handleChangeInput = (text) => {
    this.setState({ input: text })
  }


 handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

}


class Header extends React.Component {
	render() {
		return (
			<header>
				{this.props.children}
           </header>
		);
	}
}
class Logo extends React.Component {
	render() {
		return (
			<img src={MNMLogo} />
		);
	}
}




class MNMLink extends React.Component {
	render() {
		return (
			<div className="form-group">
				<a href="http://www.mercurynewmedia.com">mercurynewmedia</a>
			</div>
		);
	}
}

class MWLink extends React.Component {
	render() {
		return (
			<div className="form-group">
				<a href="http://www.mercury.works">works</a>
			</div>
		);
	}
}



class Main extends React.Component {
	render() {
		return (
			<main role="main">
				<h1>{this.props.title}</h1>
				{this.props.children}
         </main>
		);
	}
}

class Footer extends React.Component {
	render() {
		return (
			<footer role="contentinfo">
				{this.props.children}
         </footer>
		);
	}
}


class ContactUs extends React.Component {
	render() {
		return (
			<p>4350 W. Cypress St. Suite 702, Tampa, FL 33607 &bull; (813) 933-9800</p>
		);
	}
}

export default Hello;
