var Hello = React.createClass({
			getDefaultProps: function () {
				return {
					firstName: 'Mr.',
					lastName: 'Sharif'
				};	
			},
			getInitialState: function () {
				return {
					firstName: this.props.firstName
				};
				
			},
			onButtonClick: function (e) {
				e.preventDefault();
				var balsal = this.refs.Abul.value;

				this.refs.Abul.value = '';

				if (typeof name === 'string' && balsal.length > 0 ) {
						this.setState({
								firstName: balsal
						});
				}

				
			},

			render: function () {
				var name = this.state.firstName;
				var message = this.props.message;

				return (
					<div>
						<h2>Hello { name } </h2>
						<h4>{ message + '!!!' }</h4>

						<form onSubmit={this.onButtonClick}>
							<input type="text" ref="Abul" />
							<button>Set Name</button>
						</form>
					</div>
				)
			}
		})
		
		ReactDOM.render(
			<Hello message="Hi, Whats up ?" />,
			document.getElementById('root')
		)