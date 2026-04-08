import { AuthContextProvider } from "./src/contexts/auth.context";
import { NavigationRoutes } from "./src/routes";
import "./src/styles/global.css"

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationRoutes />
    </AuthContextProvider>
  );
}


