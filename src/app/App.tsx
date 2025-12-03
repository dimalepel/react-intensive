import MainLayout from "../shared/layouts/MainLayout.tsx";
import {ThemeProvider} from "../shared/lib/theme/ThemeProvider.tsx";

export default function App() {
  return (
      <ThemeProvider>
          <MainLayout />
      </ThemeProvider>
  )
}