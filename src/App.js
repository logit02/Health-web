
import React from "react";
import {
    Switch,
    Route,
    
} 
from "react-router-dom";

import Navigator from './Components/Navigation/nav.js' ;
import Land from './Components/Landing_page_1/land.js';
import Services from "./Components/Services/servies.js";
import Land2 from './Components/Landing_page_2/land2.js';
import Land3 from './Components/Landing_page_3/land3.js';
import Opinions from './Components/Opinions/opinions.js';
import Footer from "./Components/Footer/footer.js";
import Signup from './Components/signup/signup.js';
import Admin from './Components/admin/admin.js';




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

                <Route path = '/admin'>
                    <Admin />
                </Route>

                
             </Switch>
        </div>
    );
}


export default App;
