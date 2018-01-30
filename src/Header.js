import React, { Component } from "react";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import StarIcon from "material-ui-icons/Star";
import SendIcon from "material-ui-icons/Send";
import DeleteIcon from "material-ui-icons/Delete";
import ReportIcon from "material-ui-icons/Report";
import MailIcon from "material-ui-icons/Mail";
import HomeIcon from "material-ui-icons/Home";
import HistoryIcon from "material-ui-icons/History";
import FingerprintIcon from "material-ui-icons/Fingerprint";
import ExploreIcon from "material-ui-icons/Explore";
import LanguageIcon from "material-ui-icons/Language";
import SettingsIcon from "material-ui-icons/Settings";
import SettingsEthernetIcon from "material-ui-icons/SettingsEthernet";
import UpdateIcon from "material-ui-icons/Update";
import VerifiedUserIcon from "material-ui-icons/VerifiedUser";
import FlagIcon from "material-ui-icons/Flag";
import CallMadeIcon from "material-ui-icons/CallMade";
import CallReceivedIcon from "material-ui-icons/CallReceived";
import AccountCircleIcon from "material-ui-icons/AccountCircle";
import FeedbackIcon from "material-ui-icons/Feedback";
import HelpIcon from "material-ui-icons/Help";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import AccountCircle from "material-ui-icons/AccountCircle";
import Drawer from "material-ui/Drawer";
import Menu, { MenuItem } from "material-ui/Menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      timerEnabled: true,
      menuVisible: false
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  toggleTimer = () => {
    var newState = !this.state.timerEnabled;
    this.setState(prevState => ({
      timerEnabled: !prevState.timerEnabled
    }));

    if (newState) {
      this.timerID = setInterval(() => this.tick(), 1000);
    } else {
      clearInterval(this.timerID);
    }
  };

  toggleMenu = () => {
    var newState = !this.state.menuVisible;

    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  };

  render() {
    const sideList = (
      <div>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <Divider />
        <MenuItem>Menu Item 3</MenuItem>
        <MenuItem>Menu Item 4</MenuItem>
      </div>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              My App
            </Typography>

            <div>
              <IconButton
                aria-haspopup="true"
                color="inherit"
                onClick={() => alert("user;")}
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <h1>Time</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Button raised color="primary" onClick={() => this.toggleTimer()}>
          {this.state.timerEnabled ? "ON" : "OFF"}
        </Button>
        <Drawer open={this.state.menuVisible} onClose={() => this.toggleMenu()}>
          <div tabIndex={0} role="button">
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Header;
