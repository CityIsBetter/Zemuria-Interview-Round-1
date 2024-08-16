"use client";
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import logConversion from '@/utils/logger'
import { trackView } from '@/utils/views';

export default function VariantA() {
  
  useEffect(() => {
    trackView("A")
  }, []);
  
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
