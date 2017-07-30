import React from "react";
import { Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { login } from "../actions/meta";
import { selectIsLoggedIn } from "../selectors";

const Home = ({ isLoggedIn, login }) =>
  <div className="row">
    <div className="col-md-6">
      <div id="about">
        <h2>
          <FormattedMessage
            id="ui.about.title.overview"
            defaultMessage="Fresh Humanitarian Maps"
          />
        </h2>
        <h3>
          <FormattedMessage
            id="ui.about.subhead"
            defaultMessage="Download up-to-date humanitarian maps for GIS analysis or for use in GPS devices and Smartphones."
          />
        </h3>
        <p>
          <FormattedMessage
            id="ui.about.overview"
            defaultMessage="This platform allows you to create custom OpenStreetMap (OSM) exports for various HOT regions. You can specify an area of interest and a list of OSM feature tags for the export. There are a number of file formats available for exporting the data in, which includes Esri SHP, Garmin IMG, Google KMZ, OSM PBF and SQlite SQL. The OSM data available from the Export Tool is updated at one minute intervals."
          />
        </p>
        <h2>
          <FormattedMessage
            id="ui.about.title.getting_started"
            defaultMessage="How to Get Started"
          />
        </h2>
        <p>
          <FormattedMessage
            id="ui.about.getting_started"
            defaultMessage="You can view and search through existing HOT exports at our {exportsLink} page. It is not required to have an account to view or search existing exports, however if you would like to create a new export please {loginLink} with your OSM account. If this is the first time you have logged into the HOT Export Tool, you will be asked to provide a valid email address. More detailed help information on how to use the Export Tool is available on our {helpLink} page."
            values={{
              exportsLink: (
                <Link to="/exports">
                  <FormattedMessage id="ui.exports" defaultMessage="Exports" />
                </Link>
              ),
              helpLink: (
                <Link to="/help">
                  <FormattedMessage id="ui.help" defaultMessage="Help" />
                </Link>
              ),
              loginLink: (
                <a href="/osm/login/openstreetmap">
                  <FormattedMessage id="ui.login" defaultMessage="Login" />
                </a>
              )
            }}
          />
        </p>
        <h3>License Information</h3>
        <p>
          <FormattedMessage
            id="ui.about.license"
            defaultMessage="Data is copyright OpenStreetMap Contributors, {odblLink}."
            values={{
              odblLink: (
                <a href="http://opendatacommons.org/licenses/odbl/1-0">
                  <FormattedMessage
                    id="ui.about.license.odbl"
                    defaultMessage="ODbL 1.0 licensed"
                  />
                </a>
              )
            }}
          />
        </p>
      </div>
    </div>
    {!isLoggedIn &&
      <div className="col-md-6">
        <div
          className="panel panel-default"
          style={{ margin: "2em 3em 0em 3em" }}
        >
          <div id="heading-wrap" className="panel-heading">
            <span className="glyphicon-heading glyphicon glyphicon-log-in pull-left">
              &nbsp;
            </span>
            <div>
              <h4>
                <FormattedMessage
                  id="ui.login_to_osm"
                  defaultMessage="Login to OpenStreetMap"
                />
              </h4>
            </div>
          </div>
          <div className="panel-body">
            <div>
              <div className="row pull-left">
                <div style={{ fontSize: "large" }}>
                  If you don't have an OpenStreetMap account you can register
                  for one{" "}
                  <a href="http://www.openstreetmap.org/user/new">here</a>.
                </div>
                <br />
                <div className="col-md-6">
                  <Button bsSize="large" bsStyle="success" onClick={login}>
                    <FormattedMessage
                      id="ui.login_to_osm"
                      defaultMessage="Login to OpenStreetMap"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}
  </div>;

const mapStateToProps = state => ({
  isLoggedIn: selectIsLoggedIn(state)
});

export default connect(mapStateToProps, { login })(Home);