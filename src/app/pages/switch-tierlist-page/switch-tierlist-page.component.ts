import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TierlistDataService } from '../../services/tierlist-data.service';
import { SwitchItem } from '../../models/gear.model';

@Component({
  selector: 'app-switch-tierlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-tierlist-page.component.html',
  styleUrl: './switch-tierlist-page.component.css'
})
export class SwitchTierlistPageComponent implements OnInit {
  switches: SwitchItem[] = [];
  searchQuery = '';

  constructor(private dataService: TierlistDataService) {}

  ngOnInit(): void {
    this.switches = this.dataService.getSwitchItems();
  }

  get filteredSwitches(): SwitchItem[] {
    if (!this.searchQuery) return this.switches;
    const q = this.searchQuery.toLowerCase();
    return this.switches.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.note.toLowerCase().includes(q)
    );
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }

  getRecommendClass(rec: string): string {
    if (rec.includes('🔥') && rec.includes('⭐')) return 'rec-fire-star';
    if (rec.includes('⭐⭐⭐')) return 'rec-sss';
    if (rec.includes('⭐⭐')) return 'rec-ss';
    if (rec.includes('⭐')) return 'rec-s';
    if (rec.includes('🔥')) return 'rec-fire';
    if (rec.includes('❌❌❌')) return 'rec-avoid';
    if (rec.includes('❌')) return 'rec-bad';
    return 'rec-neutral';
  }

  getWobbleColor(wobble: string): string {
    const v = parseFloat(wobble);
    if (!wobble || isNaN(v)) return '#8e8e93';
    if (v <= 0.008) return '#ff9500';
    if (v <= 0.015) return '#34c759';
    if (v <= 0.025) return '#64d2ff';
    if (v <= 0.04) return '#5e5ce6';
    return '#8e8e93';
  }

  getWobbleClass(wobble: string): string {
    const v = parseFloat(wobble);
    if (!wobble || isNaN(v)) return 'wobble-poor';
    if (v <= 0.008) return 'wobble-elite';
    if (v <= 0.015) return 'wobble-great';
    if (v <= 0.025) return 'wobble-good';
    if (v <= 0.04) return 'wobble-average';
    return 'wobble-poor';
  }
}
