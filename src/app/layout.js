import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'

export const metadata = {
  title: 'India Tourism',
  description: 'Explore Incredible India',
}

export default function RootLayout({ children }) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
    >

      <body className="bg-white dark:bg-black text-black dark:text-white transition-all duration-500">

        <ThemeProvider>

          {children}

        </ThemeProvider>

      </body>

    </html>
  )
}