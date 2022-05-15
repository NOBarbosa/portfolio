import { Suspense } from 'react';
import '../styles/App.css';
import { MyRoutes } from './routes';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
       <MyRoutes />
      </div>
    </Suspense>
  );
}

export default App;
