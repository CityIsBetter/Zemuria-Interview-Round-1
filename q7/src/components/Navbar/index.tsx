import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <div className={styles.main}>
        <Link href={"/"}>Home</Link>
        <Link href={"/stats"}>Stats</Link>
    </div>
  )
}
