import { createRoot } from 'react-dom/client'
import App from './app/App.tsx'
import './styles.css'

const root = document.getElementById('root');

createRoot(root!).render(
    <App />
)
