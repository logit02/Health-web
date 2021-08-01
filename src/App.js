
import React from "react";
import {
    Switch,
    Route,
    
} 
from "react-router-dom";

import Navigator from './nav.js' ;
import Land from './land.js';
import Services from "./servies.js";
import Land2 from './land2.js';
import Land3 from './land3.js';
import Opinions from '/Users/inesatoroyan/Desktop/React-app/src/opinions.js';
import Footer from "./footer.js";
import Signup from '/Users/inesatoroyan/Desktop/React-app/src/signup/signup.js';





function App() {
    return (
        <div>
            


            <Switch>
                <Route path="/home">
                <Navigator/>
                    <Land/>
                    <Services />
                    <Land2 />
                    <Land3 />
                    <Opinions />
                    <Footer />
                </Route>

                <Route path ="/signup">
                <Navigator/>
                <Signup />
                <Footer />
                </Route>


                

            </Switch>
        </div>
    );
}


export default App;
