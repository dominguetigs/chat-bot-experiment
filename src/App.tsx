import { Chat } from './components/chat';
import { Toaster } from './components/ui/sonner';
import { ThemeProvider } from './hooks/use-theme';

function App() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
      <ThemeProvider>
        <Chat />
      </ThemeProvider>
      <Toaster />
    </main>
  );
}

export default App;
