import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './pages/Main';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import ClassMain from './pages/ClassMain';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main} />
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
                <Route exact path="/page3" component={Page3} />
                <Route exact path="/class" component={ClassMain} />
            </div>
        </Router>
    );
};

export default AppRouter;