import { Chat } from './components/chat';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './hooks/use-theme';

function App() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <ThemeProvider>
        <Chat />
      </ThemeProvider>
      <Toaster />
    </main>
  );
}

export default App;
