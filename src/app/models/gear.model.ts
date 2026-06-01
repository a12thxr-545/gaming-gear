// ── Home page models (keyboards + mice quick picks) ──────────────────────────
export interface KeyboardItem {
  layout: string;
  bestBudget: string;
  budgetNote: string;
  topPerformance: string;
  performanceNote: string;
}

export interface MouseItem {
  name: string;
  description: string;
  shopee: boolean;
  aliexpress: boolean;
  lazada: boolean;
}

export interface MouseTier {
  tier: string;
  tierLabel: string;
  color: string;
  bgColor: string;
  items: MouseItem[];
}

// ── Full tierlist models ──────────────────────────────────────────────────────
export interface KeyboardTierItem {
  tier: string;
  brand: string;
  model: string;
  layout: string;
  recommend: string;
  note: string;
  price: string;
  developer: string;
  shopee: boolean;
  taobao: boolean;
  official: boolean;
  aliexpress: boolean;
}

export interface SwitchItem {
  recommend: string;
  wobble: string;
  name: string;
  note: string;
  totalTravel: string;
  initialForce: string;
  totalForce: string;
  topHousing: string;
  stem: string;
  bottomHousing: string;
}

export interface IemItem {
  name: string;
  valorant: string;
  cs2: string;
  pubg: string;
  apex: string;
  price: string;
  comment: string;
}
