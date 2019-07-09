// @flow

import './loader.pcss';

import React, { Component } from 'react';

type Props = {
  size: 'small' | 'medium',
}

export default class Loader extends Component<Props> {
  onLoadImage() {
    window.scrollTo(0, document?.body?.scrollHeight);
  }

  render() {
    const { size } = this.props;

    return (
      <img
        src={
          size === 'small'
            ? '../assets/images/small_loading.gif'
            : '../assets/images/loading.gif'
        }
        alt="loading"
        className={
          size === 'small'
            ? 'loader-small'
            : 'loader'
        }
        onLoad={
          size === 'small'
            ? this.onLoadImage
            : () => {}
        }
      />
    );
  }
}
