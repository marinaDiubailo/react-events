import { memo, Suspense } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { Loader } from '@/shared/ui/Loader/Loader';
import { queryClient } from '@/shared/client/queryClient';
import { AppRouter } from './providers/Router';

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
