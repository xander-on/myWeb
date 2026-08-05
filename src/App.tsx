import { Background } from "@/modules/shared/presentation/components/Background"
import { AppRouter } from "@/router/AppRouter"

export const App = () => {
  return (
    <>
      <AppRouter />
      <Background />
    </>
  )
}
