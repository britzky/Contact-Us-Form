import { QuestionForm } from "./pages/QuestionForm";
import { ThemeProvider } from "@mui/material";
import { theme } from './theme/theme.js'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <QuestionForm />
    </ThemeProvider>
    </>
  );
}

export default App;
