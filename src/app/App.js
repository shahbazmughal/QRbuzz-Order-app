/**
 * Entry application component used to compose providers and render Routes.
 * */

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Routes } from "../app/Routes";


export default function App({ store, persistor, basename }) {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<h2>Loading</h2>}>
        {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
        <React.Suspense fallback={<h2>Loading</h2>}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
            {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
              {/* Provide `react-intl` context synchronized with Redux state.  */}
                {/* Render routes with provided `Layout`. */}
                <Routes />
          </BrowserRouter>
        </React.Suspense>
      </PersistGate>
    </Provider>
  );
}
