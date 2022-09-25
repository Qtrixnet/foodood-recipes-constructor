import 'normalize.css';
import './vendor/fonts.css';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from "react-redux";
import store from "./services/store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <App/>
    </DevSupport>
  </Provider>
);
