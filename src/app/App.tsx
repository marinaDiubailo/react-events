import { memo, Suspense } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Loader } from '@/shared/ui/Loader/Loader';
import { AppRouter } from './providers/Router';

const queryClient = new QueryClient();

const App = memo(() => {
  return (
    <div id="app">
      <Suspense fallback={<Loader />}>
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </Suspense>
    </div>
  );
});

export default App;
