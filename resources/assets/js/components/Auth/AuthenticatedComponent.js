import React, {Component} from 'react';
import AuthStore from '../../stores/AuthStore';

export default (ComposedComponent) => {
  return class AuthenticatedComponent extends Component {

    static willTransitionTo(transition) {
      if (!AuthStore.isLoggedIn()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }
    }

    constructor() {
      super()
      this.state = this._getLoginState();
    }

    _getLoginState() {
      return {
        userLoggedIn: AuthStore.isLoggedIn(),
        user: AuthStore.user,
        jwt: AuthStore.jwt
      };
    }

    componentDidMount() {
      this.changeListener = this._onChange.bind(this);
      AuthStore.addChangeListener(this.changeListener);
    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      AuthStore.removeChangeListener(this.changeListener);
    }

    render() {
      return (
      <ComposedComponent
        {...this.props}
        user={this.state.user}
        jwt={this.state.jwt}
        userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
}
