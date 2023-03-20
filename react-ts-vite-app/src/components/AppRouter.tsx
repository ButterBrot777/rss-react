import React, { Component } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import routes from '../router/router';
import RouteBuilder from '../interfaces/Route.interface';

class AppRouter extends Component {
  render() {
    return (
      <div className="container flex flex-col w-screen m-auto items-center">
        <Header />
        <Routes>
          {routes.map((route: RouteBuilder) => (
            <Route element={route.element} path={route.path} key={route.path} />
          ))}
          ;
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default AppRouter;
