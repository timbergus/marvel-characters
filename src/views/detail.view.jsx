// @flow

import './detail.view.css';

import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { GET_CHARACTER_DETAIL } from '../apollo/queries';

import Loader from '../components/loader';
import ComicList from '../components/comic-list';

type Props = {
  match: Object,
  history: Object,
};

export default class ListView extends Component<Props> {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  }

  goToError = () => {
    const { history } = this.props;
    history.push('/error');
  }

  render() {
    const { match } = this.props;
    return (
      <Query query={GET_CHARACTER_DETAIL} variables={{ id: Number(match?.params?.id) }}>
        {
          ({ loading, error, data }) => {
            if (loading) return <Loader />;

            if (error) {
              this.goToError();
              return null;
            }

            return (
              <Fragment>
                <h1>Marvel Universe</h1>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      image={data.characters[0].thumbnail}
                      title={data.characters[0].name}
                      className="card-media"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {data.characters[0].name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {data.characters[0].description}
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
                  data.characters[0].comics.length > 0 && (
                    <Typography variant="h5" component="h4" style={{ marginTop: '20px' }}>
                      Comics
                    </Typography>
                  )
                }
                <ComicList comics={data.characters[0].comics} />
              </Fragment>
            );
          }
        }
      </Query>
    );
  }
}
