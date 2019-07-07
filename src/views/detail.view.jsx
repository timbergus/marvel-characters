// @flow

import './detail.view.css';

import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';

import { GET_CHARACTER_DETAIL } from '../apollo/queries';

import Loader from '../components/loader';

type Props = {
  match: Object,
  history: Object,
};

export default class ListView extends Component<Props> {
  goBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Detail</h1>
        <Query query={GET_CHARACTER_DETAIL} variables={{ id: Number(match?.params?.id) }}>
          {
            ({ loading, error, data }) => {
              if (loading) return <Loader />;
              if (error) return `Error! ${error.message}`;

              return (
                <Fragment>
                  <h1>{data.characters[0].name}</h1>
                  <img alt="thumbnail" src={data.characters[0].thumbnail} />
                </Fragment>
              );
            }
          }
        </Query>
      </div>
    );
  }
}
