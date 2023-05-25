import '@/styles/globals.css'
import { Console } from 'console'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
console.log("hello world");
  return <Component {...pageProps} />
}
