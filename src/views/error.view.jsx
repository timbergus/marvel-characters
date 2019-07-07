// @flow

import './error.view.css';

import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {
  history: Object,
};

export default class ListView extends Component<Props> {
  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h5" component="h1">
          This is not the right place.
        </Typography>
        <Typography variant="h5" component="h2">
          You shouldn&apos;t be here.
        </Typography>
        <div className="error-action">
          <Button variant="contained" color="primary" onClick={this.goHome}>
            Better go home...
          </Button>
        </div>
        <img
          src="../assets/images/not_the_right_place.png"
          alt="batman error"
          className="batman"
        />
      </Fragment>
    );
  }
}
