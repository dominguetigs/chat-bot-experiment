import { Chat } from './components/chat';
import { ThemeProvider } from './hooks/use-theme';

function App() {
  return (
    <main className="min-h-[100dvh] flex items-center justify-center">
      <ThemeProvider>
        <Chat />
      </ThemeProvider>
    </main>
  );
}

export default App;
