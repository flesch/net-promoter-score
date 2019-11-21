interface NetPromoterScore {
  promoters: number;
  detractors: number;
}

function reduceRatings({ promoters, detractors }: NetPromoterScore, rating: number): NetPromoterScore {
  if (rating >= 0 && rating <= 10) {
    return {
      promoters: rating >= 9 ? ++promoters : promoters,
      detractors: rating <= 6 ? ++detractors : detractors,
    };
  }
  return { promoters, detractors };
}

export default function netPromoterScore(ratings: number[]): number {
  const totalRatings: number = ratings.length;
  if (totalRatings) {
    const { promoters, detractors }: NetPromoterScore = ratings.reduce(reduceRatings, { promoters: 0, detractors: 0 });
    return Math.round((promoters / totalRatings - detractors / totalRatings) * 100);
  }
  return 0;
}
