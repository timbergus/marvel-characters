// @flow

import './comic-list.pcss';

import React from 'react';
import uuidv1 from 'uuid/v1';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

type Props = {
  comics: Array<Object>,
}

export default ({ comics }: Props) => (
  <div className="comics-list">
    {
      comics.map(comic => (
        <ExpansionPanel key={uuidv1()}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{comic.title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <img src={comic.thumbnail} alt="comic thumbnail" />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))
    }
  </div>
);
