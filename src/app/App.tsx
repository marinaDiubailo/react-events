import {Loader} from '@/shared/ui/Loader/Loader';
import {memo, Suspense} from 'react';
import {AppRouter} from './providers/Router';

const App = memo(() => {
  return (
    <div id="app">
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </div>
  );
});

export default App;
