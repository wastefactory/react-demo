// Import modules
import React from 'react';
import ReactDOM from 'react-dom';

// Notice that we've organized all of our routes into a separate file.
import AppRouter from './router';

// Now we can attach the router to the 'root' element like this:
ReactDOM.render( <AppRouter />, document.getElementById('container'));
