// needs to be first to ensure first stylesheet
import './style/index.css'

import { render } from 'preact'
import { App } from './components/app.jsx'


render( <App />, document.getElementById( 'app' ) )
