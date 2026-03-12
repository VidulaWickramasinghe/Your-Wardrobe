export const TIERS = {
  free: {
    name: 'Free',
    price: '$0',
    hangers: 5,
    features: ['5 Hangers', 'Basic Outfits', 'Manual Events'],
  },
  tier1: {
    name: 'Basic',
    price: '$5',
    hangers: 20,
    features: ['20 Hangers', 'Basic Outfits', 'Event Planner'],
  },
  tier2: {
    name: 'Pro',
    price: '$10',
    hangers: 20,
    features: ['20 Hangers', 'AI Recommendations', 'Event Planner'],
  },
  tier3: {
    name: 'Unlimited',
    price: '$20',
    hangers: 50,
    features: [
      '50 Hangers',
      'Unlimited Outfits',
      'AI Recommendations',
      'Price Tracking',
    ],
  },
};

export const CATEGORIES = ['Top', 'Bottom', 'Dress', 'Shoes', 'Accessory'];
export const OCCASIONS = ['Casual', 'Work', 'Party', 'Formal', 'Gym'];