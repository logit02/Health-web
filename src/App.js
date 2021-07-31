
import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Navigator from './nav.js' ;
import Land from './land.js';
import Services from "./servies.js";
import Land2 from './land2.js';
import Land3 from './land3.js';





function App() {
    return (
        <div>
            <Navigator/>


            <Switch>
                <Route path="/home">
                    <Land/>
                    <Services />
                    <Land2 />
                    <Land3 />
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
