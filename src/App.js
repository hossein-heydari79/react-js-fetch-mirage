import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>...loading</div>}>
        <Switch>
          {routes.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              exact={item.expect}
              component={item.component}
            />
          ))}
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
