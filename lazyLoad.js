// function in react that lets you load react components lazily through code splitting without help from any additional libraries
//  Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later.
// We formerly used react-loadable to achieve this but now we have react.lazy() in react core.

/* Suspense
Suspense is a component required by the lazy function basically used to wrap lazy components. 
Multiple lazy components can be wrapped with the suspense component. 
It takes a fallback property that accepts the react elements you want to render as the lazy component is being loaded. */

// without lazy
import OtherComponent from './OtherComponent';
 
// with lazy
const OtherComponent = React.lazy(() => import('./OtherComponent'));

//using suspense
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

const MyComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading ... </div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

// Putting it all together
import React, { Suspense, lazy } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
 
const Home = lazy(() => import('./pages/Home'))
const SelectCity = lazy(() => import('./pages/SelectCity'))
const CityPage = lazy(() => import('./pages/City'))
 
const App = () => {
   return (
       <Router>
           <Suspense fallback={<h1>Loading...</h1>}>
               <Switch>
                   <Route exact component={Home} path="/" />
                   <Route component={SelectCity} path="/select-city" />
                   <Route component={CityPage} path="/:city" />
               </Switch>
           </Suspense>
       </Router>
   )
}
 
export default App;

// Lazy loading is a design pattern for optimizing web and mobile apps. 
// The concept of lazy loading is simple: initialize objects that are 
// critical to the user interface first and quietly render noncritical items later.
// React.lazy() is a function that enables you to render a dynamic import as a regular component. 
// Dynamic imports are a way of code-splitting, which is central to lazy loading.
// React.Suspense enables you to specify the loading indicator in the event that the components in the tree below it are not yet ready to render.
// Code-splitting is the process of dividing a large bundle of code into multiple bundles that can be loaded dynamically.

import React, { Suspense } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";

const Calendar = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 5 * 1000)).then(
    () =>
      Math.floor(Math.random() * 10) >= 4
        ? import("./components/Calendar")
        : Promise.reject(new Error())
  );
});

export default function CalendarComponent() {
  return (
    <div>
      <ErrorBoundary>
        <Header>Calendar</Header>

        <Suspense fallback={<Loader />}>
          <Calendar />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

// Here, we created a simple Loader component to use as fallback content for the lazy Calendar component.
