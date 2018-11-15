import React from 'react';
import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux';


export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.geod.title || 'One'}</h1>

        {this.props.geod.title ? (
          <button onClick={this.props.closeGeod}>Two</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateGeod({ title: 'Two' })
            }
          >
            Click Me!
          </button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geod: state.geod,
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;