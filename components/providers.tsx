import { ThemeProviders } from '@/components/ui/theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProviders>{children}</ThemeProviders>
}


