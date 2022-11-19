import Link from "next/link"
import styles from './header.module.css'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li><Link href="/">Welcome</Link></li>
          <li><Link href="/posts/first">First Post</Link></li>
          <li><Link href="/posts/second">Second Post</Link></li>
        </ul>
      </header>
    </>
  )
}

