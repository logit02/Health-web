import {NavLink} from 'react-router-dom'
import React from "react";
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import logo from './logo192.png';
import search from './outline_search_white_24dp.png';


class Navigator extends React.Component {
    render() {
        return (
            <header class='header'>
                <img src={logo} alt="#" className='logo'/>

                <ul>
                    <li>
                        <NavLink to="/home" className='home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='home1'>About</NavLink>
                    </li>

                    <li>
                        < NavLink to="/community" className='home2'>Join the community</NavLink>
                    </li>

                </ul>
                <div className='pntrenq'>
                    <NavLink to="/LogIn" className='LogIn'>Log In</NavLink>
                    <img src={search} alt="#" className='search'/>
                </div>
            </header>

        )
    }
}

function Home() {

    return (<div className='land'>
        <h1>The global React community of enthusiastic developers </h1>
        <div className='es'>
            <button className='button'>Join us</button>
            <NavLink to="/ari" className='ari'>Take a tour > </NavLink>
        </div>
    </div>);
}

function About() {
    return <h2>About</h2>;
}

function Comm() {
    return <h2>Community</h2>;
}

function LogIn() {
    return <h2>Log In </h2>;
}

function ari() {
    return <h2>Log In </h2>;
}

function App() {
    return (
        <div>
            <Navigator/>

            <Switch>
                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/community">
                    <Comm/>
                </Route>
                <Route path="/Log In">
                    <About/>
                </Route>
                <Route path="/ari">
                    <ari/>
                </Route>

                <Redirect to='/home'>
                    <Home/>
                </Redirect>
            </Switch>
        </div>
    );
}


export default App;
