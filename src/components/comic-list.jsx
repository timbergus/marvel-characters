// @flow

import './comic-list.css';

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

export default (props: Props) => {
  const { comics } = props;

  return (
    <div className="comics-list">
      {
        comics.map(comic => (
          <ExpansionPanel key={uuidv1()}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{comic.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                This is the comic description.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
    </div>
  );
};
