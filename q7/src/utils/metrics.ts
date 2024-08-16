import { getTotalViews } from './views';

export function calculateAndLogConversionRate(page: string): string {
  const totalViews = getTotalViews(page);
  const conversions: Array<{ variant: string; timestamp: string }> =
    JSON.parse(localStorage.getItem('conversions') || '[]');

  const pageConversions = conversions.filter(conversion => conversion.variant === page).length;

  const conversionRate = totalViews > 0 ? (pageConversions / totalViews) * 100 : 0;

  console.log(`Conversion rate for ${page}: ${conversionRate.toFixed(2)}%`);
  return conversionRate.toFixed(2);
}
