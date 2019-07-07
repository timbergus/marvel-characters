// @flow

import './list.view.css';

import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import uuidv1 from 'uuid/v1';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { GET_CHARACTERS } from '../apollo/queries';

import Loader from '../components/loader';

type Props = {
  history: Object,
};

export default class ListView extends Component<Props> {
  goToCharacterDetail = (id: number) => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  }

  goToError = () => {
    const { history } = this.props;
    history.push('/error');
  }

  render() {
    return (
      <Fragment>
        <h1>Marvel Universe</h1>
        <List>
          <Query query={GET_CHARACTERS}>
            {
              ({ loading, error, data }) => {
                if (loading) return <Loader />;

                if (error) {
                  this.goToError();
                  return null;
                }

                return data.characters.map(item => (
                  <ListItem
                    key={uuidv1()}
                    onClick={() => this.goToCharacterDetail(item.id)}
                    className="list-item"
                  >
                    <ListItemAvatar>
                      <Avatar alt={item.name} src={item.thumbnail} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                    />
                  </ListItem>
                ));
              }
            }
          </Query>
        </List>
      </Fragment>
    );
  }
}
