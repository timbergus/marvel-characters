// @flow

import './detail.view.pcss';

import React, { Fragment, Component } from 'react';
import { compose, graphql } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {
  GET_CHARACTER_DETAIL,
  GET_CHARACTER_COMICS,
} from '../apollo/queries';

import Loader from '../components/loader';
import ComicList from '../components/comic-list';
import MarvelLogo from '../components/marvel-logo';

type Props = {
  characters: Object,
  comics: Object,
  history: Object,
};

@graphql(GET_CHARACTER_DETAIL, {
  name: 'characters',
  options: props => ({
    variables: {
      id: Number(props.match?.params?.id),
    }
  }),
})

@graphql(GET_CHARACTER_COMICS, {
  name: 'comics',
  options: props => ({
    variables: {
      id: Number(props.match?.params?.id),
    },
  }),
})

class ListView extends Component<Props> {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  goToError = () => {
    const { history } = this.props;
    history.push('/error');
  }

  render() {
    const { characters, comics } = this.props;

    if (characters.loading || comics.loading) {
      return (
        <Fragment>
          <MarvelLogo />
          <Loader size="medium" />
        </Fragment>
      );
    }

    if (characters.error || comics.error) {
      this.goToError();
      return null;
    }

    return (
      <Fragment>
        <MarvelLogo />
        <Card>
          <CardActionArea>
            <CardMedia
              image={characters.characters[0].thumbnail}
              title={characters.characters[0].name}
              className="card-media"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {characters.characters[0].name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {characters.characters[0].description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={this.goBack}>
              Back
            </Button>
          </CardActions>
        </Card>
        {
          comics.comics.length > 0 && (
            <Typography
              variant="h5"
              component="h4"
              classes={{ root: 'comics-title' }}
            >
              Comics
            </Typography>
          )
        }
        <ComicList comics={comics.comics} />
      </Fragment>
    );
  }
}

export default ListView;
