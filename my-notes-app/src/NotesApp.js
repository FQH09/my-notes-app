import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ArchivePage from './pages/ArchivePage';
import HomePage from './pages/HomePage';
import InputPage from './pages/InputPage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Logout from './component/Logout';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { ThemeProvider } from './context/ThemeContext';
import ToggleTheme from './context/ToggleTheme';

import './style/style.css';


class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem('theme') || 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async componentDidMount() {
    document.documentElement.setAttribute('data-theme', this.state.theme);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
        initializing: false
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }
  
  onLogout() {
    this.setState(() => {
      return {
        authedUser: null
      }
    });

    putAccessToken('');
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null){
      return(
        <ThemeProvider value={this.state}>
        <div>
          <header>
            <h1>Notes App</h1>
          </header>
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={this.onLoginSuccess} />}/>  
              <Route path="/register" element={<RegisterPage />}/>            
            </Routes>          
          </main>
          <ToggleTheme />
        </div>
        </ThemeProvider>
      ) }

    return(
      <ThemeProvider value={this.state}>
      <>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/input" element={<InputPage/>}/>
            <Route path="/archive" element={<ArchivePage/>}/>
            <Route path="/notes/:id" element={<DetailPage />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
        <ToggleTheme />
        <Logout logout={this.onLogout} />
      </>
      </ThemeProvider>
    );
  }
}


export default NotesApp;
