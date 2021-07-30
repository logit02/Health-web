
import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Navigator from './nav.js' ;
import Land from './land.js';
import Services from "./servies.js";





function App() {
    return (
        <div>
            <Navigator/>


            <Switch>
                <Route path="/home">
                    <Land/>
                    <Services />
                </Route>
                <Redirect to='/home'>
                    <Land/>
                    <Services />
                </Redirect>

            </Switch>
        </div>
    );
}


export default App;
