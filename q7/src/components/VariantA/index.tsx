"use client";
import React from 'react'
import styles from './styles.module.css'
import logConversion from '@/utils/logger'

export default function VariantA() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>You are viewing Variant A</div>
      <div className={styles.container}>
        <div className={styles.box} onClick={() => logConversion("A")}></div>
        <div className={styles.box} onClick={() => logConversion("A")}></div>
        <div className={styles.box2} onClick={() => logConversion("A")}></div>
        <div className={styles.box3} onClick={() => logConversion("A")}></div>
      </div>
    </div>
  )
}
