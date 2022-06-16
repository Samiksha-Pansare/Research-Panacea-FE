import React from 'react';
import Indexbody from './Components/Indexbody';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LogIn from './Components/LogIn';
import Footer from './Components/Footer';
import UpcomingConferences from './Components/UpcomingConferences';
import Chat from './Components/Chat';
import Papers from './Components/Papers';
import Feed from './Components/Feed';
import AcademicEvents from './Components/AcademicEvents';
import Collaborators from './Components/Collaborators';
import Collabreq from './Components/Collabreq';
import Collabdetails from './Components/Collabdetails';
import Recommend from './Components/Recommend';
import Eventdetails from './Components/Eventdetails';

function App() {
  return (
    // <LogIn/>
    <Router>
        <Routes>
          <Route exact path="/" element={<><Indexbody/><Footer/></>}/>
          <Route exact path="/feed" element={<><Navbar/><Feed/></>}/>

          <Route exact path="/upcomingconf" element={<><Navbar/><UpcomingConferences/></>}/>
          <Route exact path="/chat" element={<><Navbar/><Chat/></>}/>
          <Route exact path="/academiceve" element={<><Navbar/><AcademicEvents/></>}/>
          <Route exact path="/eventdet" element={<><Navbar/><Eventdetails/></>}/>
          <Route exact path="/collaborators" element={<><Navbar/><Collaborators/></>}/>
          <Route exact path="/collabreq" element={<><Navbar/><Collabreq/></>}/>
          <Route exact path="/collabdet" element={<><Navbar/><Collabdetails/></>}/>
          <Route exact path="/recommend" element={<><Navbar/><Recommend/></>}/>
          <Route exact path="/research" element={<><Navbar/><Papers/><Footer/></>}/>
        </Routes>
    </Router>
  );
}

export default App;
