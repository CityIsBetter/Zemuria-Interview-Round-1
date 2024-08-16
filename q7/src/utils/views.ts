export function trackView(page: string): void {
    const viewCounts: Record<string, number> = JSON.parse(localStorage.getItem('viewCounts') || '{}');
    if (viewCounts[page]) {
      viewCounts[page] += 1;
    } else {
      viewCounts[page] = 1;
    }
    localStorage.setItem('viewCounts', JSON.stringify(viewCounts));
  }
export function getTotalViews(page: string): number {
    const viewCounts: Record<string, number> = JSON.parse(localStorage.getItem('viewCounts') || '{}');
    return viewCounts[page] || 0;
  }
  