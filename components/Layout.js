import styles from "../styles/layout.module.css"
import Header from "./Header"
import Flash from "../components/Flash"
import Footer from "./Footer"
import Head from "next/head"

export default function Layout({ children }) {
  // const isLoggedIn = useSelector((state) => state.authorization.isLoggedIn)
  return (
    <div className={styles.container}>
      <Head>
        <meta name="Win3" />
      </Head>
      <Header />
      <Flash />
      {children}
      <Footer />
    </div>
  )
}
