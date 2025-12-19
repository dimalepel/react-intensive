import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './styles.css'
import { Provider } from 'react-redux'
import {store} from "./app/providers/store/store.ts";

const root = document.getElementById('root');

createRoot(root!).render(
    <Provider store={store}>
        <App />
    </Provider>
)
