import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Next Eisenhower',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="flex bg-[#F7FBFF] h-screen">
        <main className="w-full mx-auto overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  )
}
