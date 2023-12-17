
import './globals.css'


export const metadata = {
  title: 'Enka',
  description: 'Oonga Boonga',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
