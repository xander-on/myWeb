import { Background } from "@/shared/components"
import { AppRouter } from "./router/AppRouter"

export const App = () => {
  return (
    <>
      <AppRouter />
      <Background />
    </>
  )
}
