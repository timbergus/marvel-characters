// @flow

import './list.view.css';

import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import uuidv1 from 'uuid/v1';

import { GET_CHARACTERS } from '../apollo/queries';

import Loader from '../components/loader';

type Props = {
  history: Object,
};

export default class ListView extends Component<Props> {
  navigateToCharacterDetail = (id: number) => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  }

  render() {
    return (
      <Fragment>
        <h1>List</h1>
        <ul>
          <Query query={GET_CHARACTERS}>
            {
              ({ loading, error, data }) => {
                if (loading) return <Loader />;
                if (error) return `Error! ${error.message}`;

                return data.characters.map(item => (
                  <li
                    key={uuidv1()}
                    onClick={() => this.navigateToCharacterDetail(item.id)}
                    style={{cursor: 'pointer'}}
                  >{item.id}</li>
                ));
              }
            }
          </Query>
        </ul>
      </Fragment>
    );
  }
}
