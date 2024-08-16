function logConversion(variant: string): void {
    const conversionData = {
      variant, 
      timestamp: new Date().toISOString(),
    };
      const conversions: Array<{ variant: string; timestamp: string }> =
      JSON.parse(localStorage.getItem('conversions') || '[]');
  
    conversions.push(conversionData);
  
    localStorage.setItem('conversions', JSON.stringify(conversions));
  }
  
export default logConversion;