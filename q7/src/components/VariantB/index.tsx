"use client";
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import logConversion from '@/utils/logger';
import { trackView } from '@/utils/views';

export default function VariantB() {

  useEffect(() => {
    trackView("B")
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>You are viewing Variant B</div>
      <div className={styles.container}>
        <div className={styles.box} onClick={() => logConversion("B")}></div>
        <div className={styles.box} onClick={() => logConversion("B")}></div>
        <div className={styles.box2} onClick={() => logConversion("B")}></div>
        <div className={styles.box3} onClick={() => logConversion("B")}></div>
      </div>
    </div>
  )
}
