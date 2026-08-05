import { Background } from "@/modules/shared/presentation/components"
import { AppRouter } from "@/router/AppRouter"

export const App = () => {
  return (
    <>
      <AppRouter />
      <Background />
    </>
  )
}
