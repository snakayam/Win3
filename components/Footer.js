import React from 'react'
import styles from "../styles/Home.module.css"

export default function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
    
      <p>
        <a to="/" className="mx-1">
          Home
        </a>{" "}
        |
        <a className="mx-1" to="/about-us">
          About Us
        </a>{" "}
        |
        <a className="mx-1" to="/terms">
          Terms
        </a>
      </p>
      <p className="m-0">
        Copyright &copy; 2020{" "}
        <a to="/" className="text-muted">
          ComplexApp
        </a>
        . All rights reserved.
      </p>
    </footer>
     /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */
  )
}
