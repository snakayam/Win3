import '../styles/globals.css'

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
const App = ({ Component, pageProps }) => {
  return <div>{typeof window === 'undefined' ? null : <Component {...pageProps} />}</div>
}

export default App

