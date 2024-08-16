"use client";
import { useEffect, useState } from 'react';
import { getTotalViews } from '@/utils/views';
import { calculateAndLogConversionRate } from '@/utils/metrics';
import styles from './styles.module.css';

export default function Page() {
  const [Aviews, setAviews] = useState<number>(0);
  const [Bviews, setBviews] = useState<number>(0);
  const [Arate, setArate] = useState<string>();
  const [Brate, setBrate] = useState<string>();

  useEffect(() => {
    const totalViewsA = getTotalViews('A');
    const totalViewsB = getTotalViews('B');

    setAviews(totalViewsA);
    setBviews(totalViewsB);
    setArate(calculateAndLogConversionRate('A'));
    setBrate(calculateAndLogConversionRate('B'));
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.title}>Stats</div>
      <div className={styles.stats}>
        Total views = {Aviews + Bviews}
      </div>
      <div className={styles.variant}>
        Variant A views: {Aviews} <br />
        Variant A Conversion Rate: {Arate}%
      </div>
      <div className={styles.variant}>
        Variant B views: {Bviews} <br />
        Variant B Conversion Rate: {Brate}%
      </div>
    </div>
  );
}
