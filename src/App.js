import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Showcase from "./pages/Showcase";

export default function App() {
  return (
    <Router>
      <div className="sm:min-h-screen bg-blue-500 md:min-h-screen bg-green-500 lg:min-h-screen bg-yellow-500 xl:min-h-screen bg-indigo-500 2xl:min-h-screen bg-purple-500 3xl:min-h-screen bg-pink-500">
        {/* Your common layout or navigation can go here */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/contact" component={Contact} />
          <Route path="/packages" component={Packages} />
          <Route path="/showcase" component={Showcase} />
          {/* Add a 404 page for routes that do not match */}
          <Route path="*" component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
}
