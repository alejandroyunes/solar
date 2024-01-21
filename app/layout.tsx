import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "Solar Company",
  description: "Solar Energy",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

