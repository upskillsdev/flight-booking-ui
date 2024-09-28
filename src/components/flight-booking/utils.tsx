import { Briefcase, TvMinimal, Utensils, Wifi } from 'lucide-react';

import { BenefitEnum } from './types';

export const getBenefitIcon = (name: BenefitEnum, iconSize = 16) => {
  switch (name) {
    case 'wifi':
      return <Wifi size={iconSize} />;
    case 'meal':
      return <Utensils size={iconSize} />;
    case 'baggage':
      return <Briefcase size={iconSize} />;
    case 'entertainment':
      return <TvMinimal size={iconSize} />;
  }
};

export const formatNumber = (num: number, currency?: string) => {
  return Intl.NumberFormat('en-US', {
    maximumFractionDigits: 3,
    currency: currency,
    style: currency ? 'currency' : undefined,
  }).format(num);
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
};
