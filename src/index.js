import * as serviceWorker from './serviceWorker';
import {state} from "./redux/state";
import {renderState} from './render'

renderState(state);

serviceWorker.unregister();
