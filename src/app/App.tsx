import {ThemeProvider} from "../shared/lib/theme/ThemeProvider.tsx";
import {UserProvider} from "../shared/lib/user/UserProvider.tsx";
import {AppRouter} from "./providers/router";

export default function App() {
  return (
      <UserProvider>
          <ThemeProvider>
              <AppRouter />
          </ThemeProvider>
      </UserProvider>
  )
}