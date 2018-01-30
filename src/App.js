import React, { Component } from "react";
import logo from "./logo.svg";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createMuiTheme } from "material-ui/styles";
import "./App.css";
import Button from "material-ui/Button";
import Header from "./Header";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import CustomTextInput from "./CustomTextInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const muiTheme = createMuiTheme({
      palette: {
        primary: {
          light: "#757ce8",
          main: "#3f50b5",
          dark: "#002884",
          contrastText: "#fff"
        },
        secondary: {
          light: "#ff7961",
          main: "#f44336",
          dark: "#ba000d",
          contrastText: "#000"
        }
      }
    });

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <Header />
          <br />
          <br />
          <CustomTextInput />
          <br />
          <br />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
