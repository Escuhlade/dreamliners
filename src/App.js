import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Showcase from "./pages/Showcase";
import Faqs from "./pages/Faqs";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="sm:min-h-screen bg-gray-950 md:min-h-screen bg-gray-950 lg:min-h-screen bg-gray-950 xl:min-h-screen bg-gray-950 2xl:min-h-screen bg-gray-950 3xl:min-h-screen bg-gray-950">
        {/* Your common layout or navigation can go here */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />
          <Route path="/packages" component={Packages} />
          <Route path="/showcase" component={Showcase} />
          {/* <Route path="/aboutus" component={} /> */}
          <Route path="/faqs" component={Faqs} />
          <Route path="/about" component={About}></Route>
          
          
          {/* Add a 404 page for routes that do not match */}
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
}
