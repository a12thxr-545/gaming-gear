import { Injectable } from '@angular/core';
import { KeyboardTierItem, SwitchItem, IemItem } from '../models/gear.model';

export interface KeyboardTierGroup {
  tier: string;
  color: string;
  items: KeyboardTierItem[];
}

export interface SwitchTierGroup {
  recommend: string;
  color: string;
  items: SwitchItem[];
}

export interface IemTierGroup {
  tier: string;
  color: string;
  items: IemItem[];
}

@Injectable({ providedIn: 'root' })
export class TierlistDataService {

  getKeyboardTierGroups(): KeyboardTierGroup[] {
    const allItems: KeyboardTierItem[] = [
      // SSS
      { tier:'SSS', brand:'Geonworks', model:'VENOM 60 HE RGB', layout:'60%', recommend:'👑👑👑', note:'Most fastest feeling and stable (scan37k no focus)', price:'$65 (PCB)', developer:'Geonworks', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'SSS', brand:'Geonworks', model:'VENOM TKL HE RGB', layout:'80%', recommend:'👑👑👑', note:'Just wait for their release...', price:'???', developer:'Geonworks', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'MM Studio', model:'M6Pro+ (Wired)', layout:'60%', recommend:'⭐⭐', note:'Double chip rt0.0001mm (scan2m/400k)', price:'798 (Module)', developer:'MM Studio', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'MM Studio', model:'M6Pro+ (Wireless)', layout:'60%', recommend:'⭐⭐', note:'M6L+ but wireless', price:'798 (Module)', developer:'MM Studio', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'MM Studio', model:'M6Lite+', layout:'60%', recommend:'➖', note:'Little faster than venom but unstable (scan30k/4k/12k)', price:'498 (PCB)', developer:'MM Studio', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'RAKKA', model:'60 ATLAS', layout:'60%', recommend:'⭐', note:'Most accuracy, but overpriced and overdesigned', price:'899 (Module)', developer:'Rakka', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'SSS', brand:'Geonworks', model:'VENOM 60 HE', layout:'60%', recommend:'👑👑', note:'True 0.04mm stable w/ lowest latency (scan40k/4k/15k)', price:'$65 (PCB)', developer:'Geonworks', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'Geonworks', model:'VENOM 87/88 (TKL) HE', layout:'80%', recommend:'👑👑', note:'Tiger lite gaming (kit) = best TKL (scan40k/2k/7k)', price:'$85 (Kit)', developer:'Geonworks', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'Geonworks', model:'VENOM 65 HE', layout:'65%', recommend:'👑👑', note:'Rarely to get, expensive case', price:'$65 (PCB)', developer:'Geonworks', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'SSS', brand:'RAKKA', model:'80 Edge', layout:'80%', recommend:'➖', note:'Most accuracy, but expensive', price:'1799+', developer:'Rakka', shopee:false, taobao:true, official:false, aliexpress:false },
      // SS
      { tier:'SS', brand:'Pulsar', model:'PCMK 3 HE / TKL Bruce Lee', layout:'60/80%', recommend:'⭐', note:'Sayo PCB in Pulsar', price:'$159.95+', developer:'Sayo', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'SS', brand:'SayoDevice', model:'K61/64H3MZ V2-R', layout:'60%', recommend:'🔥⭐', note:'Many useful function (best for osu!mania)', price:'229 (PCB)', developer:'Sayo', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'SS', brand:'WOB', model:'ZEN65RT', layout:'65%', recommend:'⭐', note:'More stable than previous solution', price:'699-799', developer:'WOB-ISO', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'SS', brand:'WOB', model:'Rainy75 RT/HE', layout:'75%', recommend:'⭐', note:'Best prebuilt per price (beware PCB defect)', price:'829-929', developer:'WOB-ISO', shopee:true, taobao:true, official:false, aliexpress:false },
      { tier:'SS', brand:'HOVEY WORKS', model:'ZENT75', layout:'75%', recommend:'➖', note:'Same dev as Rainy (ISO No.2 China)', price:'999/$243', developer:'WOB-ISO', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'SS', brand:'Wooting', model:'60HE v2 (beta)', layout:'60%', recommend:'💀🤡', note:'RT0.1mm, need to change switch for lower deadzone', price:'฿10k', developer:'Wooting', shopee:false, taobao:false, official:false, aliexpress:false },
      // S
      { tier:'S', brand:'VGN', model:'FLASH Pro/Extreme', layout:'75%', recommend:'➖', note:'Buy Extreme, ignored Pro. 2.3M scanrate (bullshit)', price:'1099', developer:'Sparklink multi-240', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'Everglide', model:'AE61/64 PRO', layout:'60%', recommend:'🔥🔥🔥🔥', note:'Best budget module', price:'129-159', developer:'Sparklink single-480', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'S', brand:'Everglide', model:'AE68 PRO', layout:'65%', recommend:'🔥🔥🔥', note:'Not MM Studio anymore, its Sparklink scan256k RT0.001mm', price:'218+', developer:'Sparklink single-480', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'Everglide', model:'SU75 PRO', layout:'75%', recommend:'⭐⭐', note:'Sparklink scan256k RT0.001mm', price:'499-699', developer:'Sparklink single-480', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'VGN', model:'NEON HE+', layout:'75%', recommend:'🔥⭐🔥⭐', note:'Single 240 chip but low latency firmware', price:'279', developer:'Sparklink single-240', shopee:true, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'EWEADN', model:'X87 HE PRO', layout:'80%', recommend:'⭐🔥⭐🔥', note:'New best budget TKL', price:'350-420', developer:'Sparklink single-480', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'Chillkey/NDNH', model:'Slice75 HE', layout:'75%', recommend:'➖', note:'Free 4 WS Flux switch, great prebuilt', price:'$149', developer:'Sparklink single-480', shopee:false, taobao:false, official:true, aliexpress:false },
      { tier:'S', brand:'MorkBlade', model:'Bold TKL', layout:'80%', recommend:'➖', note:'Scanrate 32k alu prebuilt', price:'799-999', developer:'Sparklink single-480', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'CAROTMAS', model:'Mercury68/Pro', layout:'65%', recommend:'➖🔥', note:"Don't buy SE/Lite", price:'169/199', developer:'Sparklink single-240', shopee:true, taobao:false, official:false, aliexpress:true },
      { tier:'S', brand:'QK (Qwertykeys)', model:'Neo65 Sonic He+', layout:'65%', recommend:'❌', note:'Great prebuilt for the price, feel fast for OEM v3', price:'$125', developer:'OEM v3', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'S', brand:'IYX/IROK', model:'MG75 Pro', layout:'75%', recommend:'➖', note:'Budget aluminium case', price:'359-399', developer:'Sparklink single-240', shopee:true, taobao:true, official:false, aliexpress:false },
      { tier:'S', brand:'WEIKAV x MorkBlade', model:'K-ONE80', layout:'80%', recommend:'➖', note:'Budget TKL aluminium', price:'599-799', developer:'Sparklink single-240', shopee:true, taobao:true, official:false, aliexpress:false },
      // A
      { tier:'A', brand:'KBDfans', model:'TOFU60 HE / HOLY60 HE', layout:'60%', recommend:'❌', note:"It's not that fast", price:'1300-1700', developer:'NNKS/NINX', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'A', brand:'MelGeek', model:'MADE68 AIR', layout:'65%', recommend:'⭐⭐', note:'Low profile!! Switch 2.8mm', price:'$139', developer:'MelGeek', shopee:true, taobao:false, official:false, aliexpress:false },
      { tier:'A', brand:'MelGeek', model:'MADE68/84PRO/ULTRA', layout:'65/75%', recommend:'➖', note:'Good services + full TTC KOM switch', price:'$149/$199', developer:'MelGeek', shopee:true, taobao:false, official:false, aliexpress:false },
      { tier:'A', brand:'MelGeek', model:'REAL67/81', layout:'65/75%', recommend:'➖', note:'New design, new switch, good macro', price:'$99/$119', developer:'MelGeek', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'A', brand:'IQUNIX', model:'EV63', layout:'60%', recommend:'➖', note:'Its okay if you stay in EU, new dev solution', price:'$169-189', developer:'IQUNIX', shopee:false, taobao:false, official:true, aliexpress:false },
      // B
      { tier:'B', brand:'Wooting', model:'60HE v2', layout:'60%', recommend:'💀🤡', note:'Increase deadzone', price:'฿10k', developer:'Wooting', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'B', brand:'Wooting', model:'80HE / TenZ', layout:'75E%', recommend:'💀💀', note:'Still slow due to bottom deadzone 0.3mm', price:'฿7-8k', developer:'Wooting', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'B', brand:'ATK x QK', model:'HEX80', layout:'80%', recommend:'❌', note:'Honestly disappoint with accuracy issue!!', price:'1299', developer:'ATK 3rd Gen', shopee:true, taobao:false, official:true, aliexpress:false },
      { tier:'B', brand:'Corsair', model:'K70 PRO TKL MGX/MAX', layout:'80%', recommend:'➖', note:'Best from big gaming brand in market', price:'$189', developer:'Corsair', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'B', brand:'Drunkdeer', model:'A75 Ultra/Master', layout:'75%', recommend:'❌', note:'Ultra=ABS, Master=Alu, not that fast but great typing', price:'$143-289', developer:'Drunkdeer', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'B', brand:'Everglide', model:'SU75 Youth', layout:'75%', recommend:'❌', note:'Worth 75% alu, no longer updated by MM Studio', price:'648', developer:'MM Studio', shopee:false, taobao:false, official:false, aliexpress:false },
      // C
      { tier:'C', brand:'NuPhy', model:'Air60/75 HE', layout:'60/75%', recommend:'❌', note:'Fake low profile (3.3mm)', price:'$120-150', developer:'Shenzhen Arbiter', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'C', brand:'GANSS', model:'G61-MAG', layout:'60%', recommend:'🤡🤡🤡', note:'Better than madlight60, great for venom60 build', price:'299-329', developer:'OEM v3', shopee:true, taobao:true, official:false, aliexpress:false },
      { tier:'C', brand:'Xinmeng', model:'Beat75/68', layout:'75/65%', recommend:'⭐', note:'Max support wireless, cheap but great build', price:'179-269', developer:'OEM v3', shopee:false, taobao:true, official:false, aliexpress:false },
      { tier:'C', brand:'LEOBOG', model:'A80RT', layout:'75%', recommend:'⭐⭐', note:'Should be same as BEAT75', price:'179-299', developer:'OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'C', brand:'MCHOSE', model:'Mix87 256k', layout:'80%', recommend:'➖', note:'RT0.001mm / Logitech TKL design with knob', price:'349-459', developer:'OEM v3', shopee:true, taobao:false, official:false, aliexpress:true },
      { tier:'C', brand:'Ajazz', model:'AK980 MAX', layout:'96%', recommend:'➖', note:'Only one full HE keyboard layout you should buy', price:'309', developer:'OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      // D
      { tier:'D', brand:'VGN', model:'NEON HE', layout:'75%', recommend:'❌', note:'Old solution', price:'189', developer:'Sparklink/OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'D', brand:'CAROTMAS', model:'Mars68 Pro Wireless', layout:'65%', recommend:'❌', note:'Only Wireless you should try!!! scan64k', price:'199', developer:'Sparklink/OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'D', brand:'AULA', model:'WIN60/68HE', layout:'60/65%', recommend:'➖', note:'Support H60 can be build to budget VENOM60HE', price:'99+', developer:'OEM v3', shopee:true, taobao:false, official:false, aliexpress:true },
      { tier:'D', brand:'SKYLOONG', model:'GK68 HE', layout:'65%', recommend:'❌', note:'Same as ND63 but better type feeling', price:'฿1.7k', developer:'Sparklink', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'D', brand:'Wooting', model:'60HE+', layout:'60%', recommend:'💀❌', note:'Old PCB, feel slow, but STABLE', price:'฿4-5k', developer:'Wooting', shopee:true, taobao:false, official:true, aliexpress:false },
      // E
      { tier:'E', brand:'Keychron', model:'K2/K4/K6/K8/K10 HE', layout:'All', recommend:'❌', note:'High latency, support wireless, not support KS20', price:'', developer:'Keychron', shopee:false, taobao:false, official:true, aliexpress:false },
      { tier:'E', brand:'Keychron', model:'Q1/Q2/Q3/Q4/Q5/Q6 HE', layout:'All', recommend:'❌', note:'High latency, support wireless, not support KS20', price:'', developer:'Keychron', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'E', brand:'Valkyrie', model:'VK MAG75/Lite/Pro', layout:'75%', recommend:'❌', note:'Good design compared to price', price:'149+', developer:'OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'E', brand:'AKKO', model:'TAC75 HE', layout:'75%', recommend:'❌', note:'Cheap 75% from AKKO', price:'211+', developer:'OEM v3', shopee:false, taobao:false, official:false, aliexpress:false },
      // F
      { tier:'F', brand:'Glorious', model:'GMMK 3/PRO HE', layout:'65/75%', recommend:'❌', note:'Super overprice', price:'', developer:'???', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'Steelseries', model:'Apex Pro TKL Gen 3 2025', layout:'80%', recommend:'❌', note:'Great but overpriced', price:'', developer:'Steelseries', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'Logitech', model:'G PRO X TKL RAPID', layout:'80%', recommend:'❌', note:'0.1mm deadzone', price:'1399', developer:'Logitech', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'ROG', model:'Falchion ACE HFX', layout:'65%', recommend:'❌', note:'Not accurate, Modified Raesha V1 switch 0.5 deadzone', price:'$200', developer:'Rongyuan', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'Razer', model:'Huntsman V3', layout:'60-100%', recommend:'❌', note:'Magnetic > optical > mechanical', price:'', developer:'Razer', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'Madlions (ATK)', model:'MAD60/68 HE Ultimate 8K', layout:'60/65%', recommend:'❌', note:'8k 0.04/0.02mm with SOCD firmware', price:'179-199', developer:'Shenzhen Arbiter', shopee:false, taobao:false, official:false, aliexpress:false },
      { tier:'F', brand:'Zynoo', model:'Y65', layout:'65%', recommend:'❌', note:'Super overprice', price:'1299', developer:'Sparklink', shopee:false, taobao:false, official:false, aliexpress:false },
    ];

    const tiers = ['SSS','SS','S','A','B','C','D','E','F'];
    const tierColors: Record<string,string> = {
      SSS: '#ff3b30', SS: '#ff6b30', S: '#ff9500',
      A: '#ffd60a', B: '#34c759', C: '#30d158',
      D: '#64d2ff', E: '#5e5ce6', F: '#8e8e93'
    };

    return tiers.map(t => ({
      tier: t,
      color: tierColors[t],
      items: allItems.filter(i => i.tier === t)
    })).filter(g => g.items.length > 0);
  }

  getSwitchItems(): SwitchItem[] {
    return [
      { recommend:'⭐', wobble:'0.004', name:'WS Flux-α (八宝磁轴-白a版)', note:'Best poppy sound (octagon stem)', totalTravel:'3.5±0.1', initialForce:'35±5', totalForce:'50±7', topHousing:'PC', stem:'PM1', bottomHousing:'PA66' },
      { recommend:'🔥⭐🔥', wobble:'0.004', name:'Unionwell Polar Blazing Bloom (极磁灼华轴)', note:'Best budget full POM same as Pro+ but diff spring, ads 0.01mm', totalTravel:'3.5±0.2', initialForce:'37±5', totalForce:'50±10', topHousing:'POM', stem:'POM', bottomHousing:'POM' },
      { recommend:'⭐⭐⭐', wobble:'0.008', name:'Mount Tai HE GT (泰山磁轴GT)', note:'Sound little better than the old one but super loud', totalTravel:'3.4', initialForce:'35', totalForce:'47', topHousing:'PC', stem:'UPE & POM', bottomHousing:'PC' },
      { recommend:'⭐', wobble:'0.008', name:'TTC Flip King/KOM (反斗万磁王轴)', note:'GREAT! Thock', totalTravel:'3.5±0.2', initialForce:'35±5', totalForce:'', topHousing:'-', stem:'-', bottomHousing:'-' },
      { recommend:'🔥⭐🔥', wobble:'0.01', name:'Unionwell x Everglide Polar Alkaid/Ice Shine (极磁冰曜轴)', note:'Maybe GOATED', totalTravel:'3.2±0.1', initialForce:'35±5', totalForce:'45±10', topHousing:'POM', stem:'POM', bottomHousing:'POM' },
      { recommend:'⭐⭐', wobble:'0.01', name:'Gateron Jade Ultra', note:'Great sound (low db) kinda pop/thock', totalTravel:'3.2±0.1', initialForce:'30±5', totalForce:'40±10', topHousing:'PC', stem:'POM', bottomHousing:'PA66 Nylon' },
      { recommend:'⭐⭐', wobble:'0.012', name:'Pink Mount Tai HE GT (粉泰山磁轴GT)', note:'New one, sound quiet thock, QC not perfect', totalTravel:'3.4', initialForce:'32', totalForce:'40', topHousing:'P1', stem:'UPE & POM', bottomHousing:'P1' },
      { recommend:'➖', wobble:'0.012', name:'WS Flux-Deep Clacky (八宝磁轴-粉鼓动)', note:'Best poppy sound (octagon stem)', totalTravel:'3.5±0.1', initialForce:'35±5', totalForce:'50±7', topHousing:'PC', stem:'PM5', bottomHousing:'PA66' },
      { recommend:'🔥⭐', wobble:'0.025', name:'MMD C1 (极曜C1磁轴)', note:'*Sound close to mech* Low clack thock if foam', totalTravel:'3.3±0.1', initialForce:'30±5', totalForce:'38±5', topHousing:'PC', stem:'LY', bottomHousing:'PC' },
      { recommend:'⭐⭐', wobble:'0.015', name:'Titan Nation Miami (迈阿密磁轴)', note:'Little quieter than HERZ and cheap', totalTravel:'3.5±0.1', initialForce:'35', totalForce:'', topHousing:'PC', stem:'POM', bottomHousing:'PA66 Nylon' },
      { recommend:'⭐', wobble:'0.015', name:'Gateron Jade Emerald (龙吟段落磁轴)', note:'TACTILE!! By Gateron, heavy clacky', totalTravel:'3.5±0.1', initialForce:'', totalForce:'55±10', topHousing:'PC', stem:'POM', bottomHousing:'PA66 Nylon' },
      { recommend:'⭐⭐', wobble:'0.015', name:'AGS Radiant HE', note:'Just raptor v2 with better material? Sound like HMX Crystal', totalTravel:'3.4', initialForce:'', totalForce:'45', topHousing:'PA12', stem:'POM', bottomHousing:'P2' },
      { recommend:'⭐⭐', wobble:'0.02', name:'OFF STUDIO x TNT Six Realms Silent (静谧-六合轴)', note:'Most stable (magnetic) switch', totalTravel:'3.5±0.1', initialForce:'40±5', totalForce:'55±7', topHousing:'PC', stem:'POM', bottomHousing:'PA66 Nylon' },
      { recommend:'⭐⭐⭐', wobble:'', name:'Haimu Dove (静音磁轴) [Mathew]', note:'**FIRST SILENT switch** little mushy', totalTravel:'3.8±0.5', initialForce:'37±5', totalForce:'45±15', topHousing:'PC', stem:'POM', bottomHousing:'PA' },
      { recommend:'⭐⭐', wobble:'', name:'NDIY Freya Silent HE', note:'Same as Haimu Dove', totalTravel:'3.8±0.1', initialForce:'25', totalForce:'45', topHousing:'PC', stem:'POM', bottomHousing:'PA' },
      { recommend:'⭐⭐', wobble:'', name:'?No Name OEM? 1st batch Panda', note:'Quiet sound, QC not that good but EXTREMELY CHEAP!!!', totalTravel:'3.5±0.2', initialForce:'30±5', totalForce:'55±5', topHousing:'POM', stem:'PC', bottomHousing:'PA' },
      { recommend:'➖', wobble:'0.015', name:'Everglide Skyline V3 (天际线)', note:'*Cheap* budget 50g force, advertise 0.008mm test 0.012', totalTravel:'3.5±0.1', initialForce:'43±3', totalForce:'53±3', topHousing:'PC', stem:'POM', bottomHousing:'PA66 Nylon' },
      { recommend:'➖', wobble:'0.015', name:'TTC Apollo (太阳神磁轴)', note:'Recolor again', totalTravel:'3.4±0.2', initialForce:'35±5', totalForce:'', topHousing:'POM', stem:'POM', bottomHousing:'POM' },
      { recommend:'➖', wobble:'0.02', name:'GEON Raptor HE V2', note:'*Sound close to mech* poppy-clacky HMX factory', totalTravel:'3.4', initialForce:'35', totalForce:'45', topHousing:'PC', stem:'POM', bottomHousing:'Nylon' },
      { recommend:'➖', wobble:'0.02', name:'Unionwell Polar Pro/+ (冠泰极磁轴Pro/+)', note:'Circle box stem, sound great (thock)', totalTravel:'3.5±0.2', initialForce:'35±5', totalForce:'50±10', topHousing:'POM', stem:'POM', bottomHousing:'POM' },
      { recommend:'➖', wobble:'0.03', name:'HMX Crystal', note:'Close to raptor v2 but different stem?', totalTravel:'3.3', initialForce:'35±2', totalForce:'42±2', topHousing:'PC', stem:'POM', bottomHousing:'PA66' },
      { recommend:'➖', wobble:'0.03', name:'DUHUK/Phynikeys HERZ', note:'Clackier than core (QC not that good)', totalTravel:'3.3±0.3', initialForce:'35±2', totalForce:'42±2', topHousing:'PC', stem:'POM', bottomHousing:'PA66' },
      { recommend:'➖', wobble:'0.025', name:'TTC Elf King (精灵王磁轴)', note:'Sounds good like Jade Pro but from TTC', totalTravel:'3.4±0.2', initialForce:'32±10', totalForce:'50', topHousing:'PC', stem:'', bottomHousing:'' },
      { recommend:'❌', wobble:'0.01', name:'Drunkdeer BeiDou (北斗轴)', note:'Need to choose QC for most stable', totalTravel:'3.6', initialForce:'35±5', totalForce:'50±7', topHousing:'PC', stem:'POM', bottomHousing:'PC?' },
      { recommend:'❌', wobble:'0.02', name:'Ice Blue (Outemu)', note:'Sound not that loud — seen in MCHOSE Ace60 / GANSS G61-MAG', totalTravel:'3.5±0.1', initialForce:'40±5', totalForce:'', topHousing:'', stem:'', bottomHousing:'' },
      { recommend:'❌', wobble:'0.025', name:'Outemu Red Sky (赤霄磁轴)', note:'Jade Pro killer in every way — seen in Xinmeng Beat75', totalTravel:'3.5±0.1', initialForce:'45±5', totalForce:'', topHousing:'PC', stem:'POM', bottomHousing:'Nylon' },
      { recommend:'❌', wobble:'0.03', name:'OKT Amethyst (Purple)', note:'Hollow thock — seen in MU68Ultra / Mars68 / Mercury68', totalTravel:'3.5±0.1', initialForce:'35±5', totalForce:'50±5', topHousing:'POM', stem:'POK', bottomHousing:'POM' },
      { recommend:'❌', wobble:'0.04', name:'Gateron Jade Air', note:'Upgraded Jade Max, deep no sharp/clicky', totalTravel:'3.5±0.1', initialForce:'35±5', totalForce:'50±10', topHousing:'POM', stem:'PC', bottomHousing:'PA12 Nylon' },
      { recommend:'❌', wobble:'0.04', name:'Gateron Jade Pro', note:'Hifi mahjong sound XD (upgraded jade), some can be 0.04', totalTravel:'3.5±0.1', initialForce:'36±5', totalForce:'50±10', topHousing:'POM', stem:'PC', bottomHousing:'PA66 Nylon' },
      { recommend:'❌❌❌', wobble:'0.07', name:'Lekker Tikken', note:'Marbly? Almost thock but not pop — seen in Wooting 60HE v2', totalTravel:'4.0', initialForce:'42', totalForce:'54', topHousing:'PC', stem:'POM', bottomHousing:'Nylon' },
      { recommend:'❌', wobble:'', name:'Kailh Flame', note:'PLEASE DON\'T — EXTREMELY WOBBLE', totalTravel:'', initialForce:'', totalForce:'', topHousing:'', stem:'', bottomHousing:'' },
    ];
  }

  getIemItems(): IemItem[] {
    return [
      { name:'ZiiGaat Horizon (EQ)', valorant:'S', cs2:'', pubg:'S', apex:'', price:'8300', comment:'Horizon to Monarch MK4 / Hype4 MK2 / Top Pro / Astral' },
      { name:'Dove audio (FPS)', valorant:'A+', cs2:'A+', pubg:'A++', apex:'A+', price:'2000', comment:'Designed purely for FPS gaming. No bass at all but insane directional accuracy. Best for CS2/PUBG.' },
      { name:'ZiiGaat Arete 2', valorant:'A+', cs2:'S', pubg:'', apex:'A-', price:'7000', comment:'Collab with Fresh Reviews. Outstanding for the price, great music tuning too.' },
      { name:'Kiwi Ears Astral', valorant:'A+', cs2:'A+', pubg:'A', apex:'A+', price:'10500', comment:'No single standout but Technical/Image positioning is top tier. Meta pick.' },
      { name:'Softears Volume S', valorant:'A++', cs2:'A+', pubg:'A-', apex:'A', price:'7500', comment:'Vocal Forward. Like being front-row at a concert.' },
      { name:'ZiiGaat Horizon', valorant:'A', cs2:'A+', pubg:'A+', apex:'A-', price:'8300', comment:'Technical nearly equals Astral. Better music tuning.' },
      { name:'ThieAudio Hype4 MK2', valorant:'A', cs2:'', pubg:'', apex:'A-', price:'8500', comment:'Similar to Horizon but more fun for music listening.' },
      { name:'ZiiGaat Crescent', valorant:'A', cs2:'', pubg:'', apex:'A-', price:'7100', comment:'Like Astral but smoother. Good detail in the price range.' },
      { name:'Kiwi Ears Orchestra II', valorant:'A', cs2:'B+', pubg:'', apex:'A-', price:'10900', comment:'Vocals stand out, bass still present. Good overall.' },
      { name:'Tanchjim Fission', valorant:'A-', cs2:'A-', pubg:'B', apex:'B', price:'3200', comment:'Budget Vocal Forward. Comes with 3.5/4.4/Type-C and 6 pairs of eartips.' },
      { name:'Xenss Top Pro', valorant:'A-', cs2:'', pubg:'', apex:'', price:'17000', comment:'Gaming and music coexist well here.' },
      { name:'Aful MagicOne', valorant:'A-', cs2:'', pubg:'', apex:'', price:'4200', comment:'Slightly odd sound due to single BA. Bass recessed.' },
      { name:'KEFINE Klean SV (EQ)', valorant:'B+', cs2:'', pubg:'', apex:'', price:'1300', comment:'Klean SV EQ\'d → Astral (80%)' },
      { name:'ZiiGaat Arete', valorant:'B+', cs2:'', pubg:'', apex:'', price:'5500', comment:'Fresh Reviews collab. Good gaming potential.' },
      { name:'Xenss Tea Pro', valorant:'B+', cs2:'', pubg:'', apex:'', price:'9000', comment:'Bass-focused, premium build. Close sound still overpowers far.' },
      { name:'Bose QC20', valorant:'B+', cs2:'B+', pubg:'C', apex:'', price:'9000', comment:'Legend semi-in-ear used by pro players. Comfortable but overpriced now.' },
      { name:'Apple Earpods', valorant:'B+', cs2:'B-', pubg:'D', apex:'C', price:'600', comment:'Earbud everyone knows. Surprisingly decent for tactical FPS. Bad for BR games.' },
      { name:'NiceHCK Rockies', valorant:'C+', cs2:'B', pubg:'', apex:'B-', price:'14000', comment:'฿14K that performs like ฿20K+. Extremely detailed. Hidden gem.' },
      { name:'KEFINE Klean SV', valorant:'B', cs2:'', pubg:'', apex:'B', price:'1300', comment:'Less bass than regular Klean. Vocals and treble stand out more.' },
      { name:'Simgot SuperMix 4', valorant:'B-', cs2:'B+', pubg:'B', apex:'B', price:'4100', comment:'Warm bass, Harman target tuning. Easy to listen to.' },
      { name:'KEFINE Delci AE', valorant:'B--', cs2:'B+', pubg:'B-', apex:'B', price:'2000', comment:'Separation similar to SuperMix4 at nearly half the price.' },
      { name:'HyperX Cloud 2/Alpha', valorant:'C+', cs2:'B+', pubg:'C', apex:'C', price:'1500', comment:'Standard reference for the era. Still decent but showing its age.' },
      { name:'KEFINE Klean', valorant:'C+', cs2:'B', pubg:'B', apex:'B-', price:'1100', comment:'Gunshots might hurt. Bass heavy. Better for BR than tactical FPS.' },
      { name:'Simgot SuperMix 5', valorant:'C', cs2:'', pubg:'', apex:'B', price:'5300', comment:'Smoother than SM4 but that smoothness costs clarity.' },
      { name:'ATK M1 / MCHOSE V9Pro', valorant:'C', cs2:'C-', pubg:'D', apex:'D', price:'1100', comment:'Not bad, but not wow. Wireless under ฿5K — beats Cloud 3.' },
      { name:'Simgot EW300', valorant:'C-', cs2:'', pubg:'C', apex:'', price:'1600', comment:'V-shaped. Gunshots are harsh. Bass overpowers everything.' },
      { name:'Moondrop Blessing 3', valorant:'C+', cs2:'', pubg:'', apex:'', price:'11000', comment:'TenZ himself complained it\'s for music, not gaming. Overrated for FPS.' },
      { name:'Truthear Zero Red', valorant:'C+', cs2:'', pubg:'', apex:'', price:'1800', comment:'Wow factor for the price. Slightly large nozzle.' },
      { name:'Logitech G PRO X', valorant:'E', cs2:'', pubg:'', apex:'', price:'3000', comment:'Gaming brand ≠ gaming sound. Genuinely bad.' },
      { name:'HyperX Cloud 3', valorant:'F, Please Don\'t Buy', cs2:'', pubg:'', apex:'', price:'', comment:'Worse than Cloud 2. Avoid.' },
    ];
  }
}
