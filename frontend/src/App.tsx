// App.tsx
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}




export default App;