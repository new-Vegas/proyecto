//require('./bootstrap');
//require('alpinejs');

import {InertiaApp} from '@inertiajs/inertia-react';
import React, { Suspense } from 'react';
import {render} from 'react-dom';
import './i18n';

const app = document.getElementById('app');

render(
   <Suspense fallback={null}>
       <InertiaApp initialPage = {JSON.parse(app.dataset.page)}
           resolveComponent = {
               name => import(`./Pages/${name}`).then(module => module.default)
           }
       />
   </Suspense>, 
        app
)
