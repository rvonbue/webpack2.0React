require("expose-loader?$!jquery");

import _ from 'lodash';
import stylesheet from "./styles/index.less";

import { sayHello } from './js/module';

$(function () {
  $("body").append("<hr><p>Welcome</p>");
});


console.log("sdsdfdfs", sayHello('World'));
