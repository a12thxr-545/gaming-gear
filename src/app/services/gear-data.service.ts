import { Injectable } from '@angular/core';
import { KeyboardItem, MouseItem, MouseTier } from '../models/gear.model';

@Injectable({
  providedIn: 'root'
})
export class GearDataService {

  getKeyboards(): KeyboardItem[] {
    return [
      {
        layout: '60%',
        bestBudget: 'Everglide AE61/64 PRO',
        budgetNote: 'Super cheap module',
        topPerformance: 'VENOM 60 HE RGB',
        performanceNote: 'Lowest latency + useful function, support controller mode'
      },
      {
        layout: '65%',
        bestBudget: 'Everglide AE68 PRO',
        budgetNote: 'Low latency with better build quality',
        topPerformance: 'VENOM 65 HE',
        performanceNote: 'Hard to find case'
      },
      {
        layout: '75%',
        bestBudget: 'VGN NEON (HE+ Only)',
        budgetNote: 'Lowest latency for budget — Discontinued',
        topPerformance: 'WOB Rainy75 RT',
        performanceNote: 'High quality prebuilt, good firmware'
      },
      {
        layout: '80% / TKL',
        bestBudget: 'EWEADN X87HE Pro',
        budgetNote: 'Great build, low latency',
        topPerformance: 'VENOM TKL HE',
        performanceNote: 'KBDFans kit, solid PCB'
      }
    ];
  }

  getMouseTiers(): MouseTier[] {
    return [
      {
        tier: 'budget',
        tierLabel: 'Budget',
        color: '#34c759',
        bgColor: 'rgba(52, 199, 89, 0.08)',
        items: [
          { name: 'ATK A9 Air / Ultimate', description: 'Better GPX2 — Optical switch with coating', shopee: true, aliexpress: true, lazada: false },
          { name: 'Mambasnake M5 | Attack Shark R5', description: 'Better Beast X / F1 Moba 42g', shopee: true, aliexpress: true, lazada: false },
          { name: 'Incott 029', description: 'Budget lightweight mouse 38g', shopee: true, aliexpress: true, lazada: false },
          { name: 'RAWM Leviathan V4', description: 'Best Viper V3/V4 clone', shopee: true, aliexpress: true, lazada: false },
          { name: 'Rapoo VT0 Air Max', description: 'Budget claw grip, Sora & XM fusion 42g clone with solid build', shopee: false, aliexpress: false, lazada: false },
          { name: 'Rapoo VT1 Max', description: 'GPX 2C alternative', shopee: true, aliexpress: false, lazada: false },
          { name: 'Xinmeng ZERO1', description: 'Budget Hitscan Hyperlight 50g', shopee: false, aliexpress: false, lazada: true },
          { name: 'ATK Zero', description: 'Upgraded VXE R1 / MAD R', shopee: true, aliexpress: false, lazada: false },
          { name: 'ATK U2 v2', description: 'Lightweight Zowie U2 clone 49g', shopee: true, aliexpress: true, lazada: false },
          { name: 'VGN F2', description: 'Bigger HTX shape 55g (Sora but high middle slope)', shopee: true, aliexpress: true, lazada: false }
        ]
      },
      {
        tier: 'worth',
        tierLabel: 'Worth It',
        color: '#ff9500',
        bgColor: 'rgba(255, 149, 0, 0.08)',
        items: [
          { name: 'Hitscan Hyperlight', description: 'Viper Mini with side flat weight 40g', shopee: true, aliexpress: false, lazada: false },
          { name: 'Ninjutso Ten / Air', description: 'Side and hump between GPX and Viper V3 (little smaller GPX)', shopee: false, aliexpress: false, lazada: false },
          { name: 'LAMZU MAYA', description: 'FNC kaajak mouse', shopee: true, aliexpress: false, lazada: false },
          { name: 'LAMZU MAYA X', description: 'GPX fusion with Viper V3', shopee: true, aliexpress: true, lazada: false },
          { name: 'Scyrox V6', description: 'Better HTS+ build', shopee: true, aliexpress: true, lazada: false }
        ]
      },
      {
        tier: 'ergo',
        tierLabel: 'Ergo',
        color: '#5e5ce6',
        bgColor: 'rgba(94, 92, 230, 0.08)',
        items: [
          { name: 'Rapoo VT3 Max', description: 'Deathadder V4 clone', shopee: false, aliexpress: false, lazada: false },
          { name: 'Rapoo VT3s Max', description: 'Deathadder V3 Hyperspeed clone solid build', shopee: true, aliexpress: true, lazada: false },
          { name: 'VGN Y2', description: 'NP01/s fusion shape 43g', shopee: true, aliexpress: false, lazada: false },
          { name: 'ATK Z1 v2', description: 'EC2 clone', shopee: true, aliexpress: true, lazada: false },
          { name: 'ATK Y9 | Aula SC900', description: 'Logitech GPX2 DEX clone', shopee: true, aliexpress: true, lazada: false },
          { name: 'Teevolution Terra | Sprime PM1', description: 'G703 inspired shape', shopee: true, aliexpress: false, lazada: false }
        ]
      }
    ];
  }
}
