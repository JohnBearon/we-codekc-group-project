import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { DateTime } from 'luxon';

<<<<<<< HEAD
//material-ui imports
import { Grid, Typography, Button } from '@material-ui/core';

//custom file imports
import EventsBar from '../../components/EventsBar/EventsBar';
=======
import computer from './computer.jpg';
import computer2 from './computer2.jpg';
import UpdateDetailsDialog from './UpdateDetailsDialog';
>>>>>>> develop

class DetailsPage extends Component {
  state = {
    showForm: false,

    newUserEvent: {
      eventId: this.props.match.params.id,
      approved: 'false',
    },
    eventPayload: {
      event_title: '',
      event_description: '',
      event_address: '',
      event_start: '',
      event_end: '',
      recurring: false,
      event_type: '1',
      recurring_time_slot: 1,
    },
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_EVENT_DETAILS',
      payload: this.props.match.params.id,
    });
  }

  clickAttendButton = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'POST_USER_EVENT',
      payload: this.state.newUserEvent,
    });
  };

  clickBackButton = (event) => {
    this.props.history.push('/events');
  };

  handleClose = (value) => (event) => {
    this.setState(
      {
        open: false,
        selectedValue:
          value == (null, undefined, '') ? value : this.state.selectedValue,
      },
      () => {
        console.log(this.state.selectedValue, value);
      }
    );
  };

  showForm = (event) => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  updateReview = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'UPDATE_EVENT',
      payload: {
        ...this.state.eventPayload,
      },
    });
    this.setState({
      eventPayload: {
        event_title: '',
        event_description: '',
        event_address: '',
        event_start: '',
        event_end: '',
        recurring: false,
        event_type: '1',
        recurring_time_slot: 1,
      },
    });
    this.props.history.push(`/event/details/${this.props.match.params.id}`);
  };

  render() {
    const details = this.props.store.eventDetailReducer;
    const date = DateTime.fromISO(details.event_start);
    const humanDate = date.toLocaleString(DateTime.DATETIME_MED);

    return (
      <div style={{ padding: 20 }}>
        <EventsBar />
        <div style={{ padding: 20 }}>
          <Typography variant="h2" gutterBottom>
            {details.event_title}
          </Typography>

          <Grid container spacing={3}>
            <Grid item lg={3}>
              {details.event_type === 1 ? (
                <img
                  src={
                    'https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0876-1.jpg'
                  }
                  alt="course"
                />
              ) : (
                <img
                  src={
                    'https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0816-1.jpg'
                  }
                  alt="event"
                />
              )}
            </Grid>
            <Grid item lg={9}>
              <Typography>Date: {humanDate}</Typography>
              <Typography> Location: {details.event_address}</Typography>
            </Grid>
          </Grid>
          <div style={{ padding: 20 }}>
            <Typography>{details.event_description}</Typography>
          </div>
          <Grid container justify="space-evenly" spacing={3}>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clickAttendButton}
              >
                Click to attend
              </Button>
            </Grid>
<<<<<<< HEAD
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={this.clickBackButton}
              >
                Back to all Events
              </Button>
=======
            <div style={{ padding: 20 }}>
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Paper>Description: {details.event_description}</Paper>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.clickAttendButton}
                >
                  Click to attend Event
                </Button>
              </Grid>
              {this.props.store.user_level === 4 ||
                (5 && (
                  <Grid item xs={6}>
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.handleClickOpen}
                    >
                      Edit
                    </Button> */}
                    <UpdateDetailsDialog
                      onClose={this.handleClose}
                      open={this.open}
                      // selectedValue={}
                    />
                  </Grid>
                ))}

              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.clickBackButton}
                >
                  Back to Events
                </Button>
              </Grid>
>>>>>>> develop
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(DetailsPage);
