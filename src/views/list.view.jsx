// @flow

import './list.view.pcss';

import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { GET_CHARACTERS } from '../apollo/queries';

import Loader from '../components/loader';
import CharacterList from '../components/character-list';

type Props = {
  history: Object,
};

type State = {
  orderBy: string,
};

export default class ListView extends Component<Props, State> {
  state = {
    orderBy: 'name_asc',
  };

  goToCharacterDetail = (id: number) => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  }

  goToError = () => {
    const { history } = this.props;
    history.push('/error');
  }

  handleChange = (e: Object) => {
    const { target: { value } } = e;
    this.setState({
      orderBy: value,
    });
  }

  render() {
    const { orderBy } = this.state;

    return (
      <Fragment>
        <h1>Marvel Universe</h1>
        <form autoComplete="off" className="filter-form">
          <FormControl>
            <InputLabel htmlFor="orderBy">Order By</InputLabel>
            <Select
              value={orderBy}
              onChange={this.handleChange}
              className="orderBy-select"
              inputProps={{
                name: 'Order By',
                id: 'orderBy',
              }}
            >
              <MenuItem value="name_asc">Name A-Z</MenuItem>
              <MenuItem value="name_desc">Name Z-A</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Query
          query={GET_CHARACTERS}
          variables={{ orderBy }}
          notifyOnNetworkStatusChange
        >
          {
            ({
              loading,
              error,
              data,
              fetchMore,
            }) => {
              if (loading && !data.characters) return <Loader />;

              if (error) {
                this.goToError();
                return null;
              }

              const { characters } = data;

              return (
                <CharacterList
                  characters={characters}
                  onSelectCharacter={this.goToCharacterDetail}
                  loading={loading}
                  onLoadMoreCharacters={() => fetchMore({
                    variables: {
                      offset: characters.length,
                      limit: 20,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        characters: [
                          ...prev.characters,
                          ...fetchMoreResult.characters],
                      });
                    },
                  })}
                />
              );
            }
          }
        </Query>
      </Fragment>
    );
  }
}
