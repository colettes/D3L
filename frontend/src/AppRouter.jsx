import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './pages/Main';
import StudentDashboard from "./pages/StudentDashboard";
import Class from './pages/Class';
import CalendarPage from './pages/CalendarPage';
import ClassMain from './pages/ClassMain';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

export const AppRouter = () => {
    
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main} />
                <Route exact path="/StudentDashboard" component={StudentDashboard} />
                <Route exact path="/class/:id" component={Class} />
                <Route exact path="/calendar" component={CalendarPage} />
                <Route exact path="/class" component={ClassMain} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
            </div>
        </Router>
    );
};

export default AppRouter;