import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Background } from "@/modules/shared/presentation/components/Background"
import { AppRouter } from "@/router/AppRouter"

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Background />
    </QueryClientProvider>
  )
}
