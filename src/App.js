import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Home = React.lazy(() => import("./components/Home"));
    const Contributors = React.lazy(() => import("./components/Contributors"));

    return (
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route path="/contributors">
              <Suspense fallback={<div>Loading...</div>}>
                <Contributors />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            </Route>
          </Switch>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
}

export default App;
