// @flow

import React, { Component, Fragment } from 'react';
import uuidv1 from 'uuid/v1';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Loader from './loader';

type Props = {
  characters: Array<Object>,
  onSelectCharacter: Function,
  onLoadMoreCharacters: Function,
  loading: boolean,
};

export default class CharacterList extends Component<Props> {
  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  handleOnScroll = () => {
    const { onLoadMoreCharacters, loading } = this.props;
    // Use pageYOffset instead of scrollY for IE11,
    if (((window?.innerHeight + window?.pageYOffset) >= document?.body?.offsetHeight) && !loading) {
      onLoadMoreCharacters();
    }
  }

  render() {
    const { characters, onSelectCharacter, loading } = this.props;

    return (
      <Fragment>
        <List>
          {
            characters.map(item => (
              <ListItem
                key={uuidv1()}
                onClick={() => onSelectCharacter(item.id)}
                className="list-item"
              >
                <ListItemAvatar>
                  <Avatar alt={item.name} src={item.thumbnail} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                />
              </ListItem>
            ))
          }
        </List>
        {
          loading && <Loader size="small" />
        }
      </Fragment>
    );
  }
}
