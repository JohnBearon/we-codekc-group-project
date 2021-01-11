import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Carousel from 'react-material-ui-carousel';

//CUSTOM FILE IMPORTS
import './LandingPage.css';
import EventListItem from '../../components/EventListItem/EventListItem';

//NEEDS images and video and event carousel.

//Material-UI imports
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from '@material-ui/core';

class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_EVENTS',
    });
  }

  state = {};

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  handleRegisterMentor = (e) => {
    this.props.history.push('/registration/page/1');
  };

  handleRegisterVolunteer = (e) => {
    this.props.history.push('/registration/page/1');
  };

  render() {
    const eventsArray = this.props.store.eventReducer.map((item, index) => {
      return (
        <EventListItem key={index} event={item} index={index} {...this.props} />
      );
    });
    return (
      <div className="grid">
        <Grid container alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Card>
              <Typography>Make an Impact!</Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi
                pharetra lacus ut ex molestie blandit. Etiam et turpis sit amet
                risus mollis interdum. Suspendisse et justo vitae metus bibendum
                fringilla sed sed justo. Aliquam sollicitudin dapibus lectus,
                vitae consequat odio elementum eget. Praesent efficitur eros
                vitae nunc interdum, eu interdum justo facilisis. Sed pulvinar
                nulla ac dignissim efficitur. Quisque eget eros metus.
                Vestibulum bibendum fringilla nibh a luctus. Duis a sapien
                metus.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* TO DO -- FIGURE OUT IMAGES */}
            <Card>
              <img
                src={'https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0840.jpg'}
                alt="coding"
              />
              <CardMedia
                image="https://wecodekc.s3.us-east-2.amazonaws.com/_W4A0840.jpg"
                title="coding"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <img
                src={
                  'https://wecodekc.s3.us-east-2.amazonaws.com/christina-wocintechchat-com-YVT21p6pO_g-unsplash.jpg'
                }
                alt="coding"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <center>
                <Typography variant="h4">Upcoming Events</Typography>
              </center>
              <Carousel>{eventsArray}</Carousel>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography>Volunteer</Typography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi
                  pharetra lacus ut ex molestie blandit. Etiam et turpis sit
                  amet risus mollis interdum. Suspendisse et justo vitae metus
                  bibendum fringilla sed sed justo. Aliquam sollicitudin dapibus
                  lectus, vitae consequat odio elementum eget. Praesent
                  efficitur eros vitae nunc interdum, eu interdum justo
                  facilisis. Sed pulvinar nulla ac dignissim efficitur. Quisque
                  eget eros metus. Vestibulum bibendum fringilla nibh a luctus.
                  Duis a sapien metus.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={this.handleRegisterVolunteer}
                >
                  register
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <img
                src={'https://wecodekc.s3.us-east-2.amazonaws.com/_MG_6534.JPG'}
                alt="volunteers smiling"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <img
                src={
                  'https://wecodekc.s3.us-east-2.amazonaws.com/_MG_6571-1.jpg'
                }
                alt="mentoring"
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography>Mentor</Typography>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur id felis metus. Vestibulum et pulvinar tortor. Morbi
                  pharetra lacus ut ex molestie blandit. Etiam et turpis sit
                  amet risus mollis interdum. Suspendisse et justo vitae metus
                  bibendum fringilla sed sed justo. Aliquam sollicitudin dapibus
                  lectus, vitae consequat odio elementum eget. Praesent
                  efficitur eros vitae nunc interdum, eu interdum justo
                  facilisis. Sed pulvinar nulla ac dignissim efficitur. Quisque
                  eget eros metus. Vestibulum bibendum fringilla nibh a luctus.
                  Duis a sapien metus.
                </p>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleRegisterMentor}
                >
                  register
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <center>
          <h4>Already a Member?</h4>
          <button className="btn btn_sizeSm" onClick={this.onLogin}>
            Login
          </button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
