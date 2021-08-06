import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LocalContext from "./LocalContext";
import { useSelector } from "react-redux";

export default function App() {
  const locale = useSelector((state) => state.keep.locale);
  const Home = React.lazy(() => import("./components/Home"));
  const Contributors = React.lazy(() => import("./components/Contributors"));
  return (
    <React.StrictMode>
      <LocalContext.Provider value={locale}>
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
      </LocalContext.Provider>
    </React.StrictMode>
  );
}
