import '@/styles/globals.css'
import { Red_Hat_Display } from 'next/font/google'

const redhatdisplay = Red_Hat_Display ({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={redhatdisplay.className}>
    <Component {...pageProps} />
    </main>
  )
}
