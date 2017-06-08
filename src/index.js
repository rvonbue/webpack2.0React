// require("expose-loader?$!jquery");

import _ from 'lodash';
import stylesheet from "./styles/index.less";


import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(< App />, document.getElementById('root'));

// $(function () {
//   $("body").append("<hr><p>Welcome</p>");
// });
