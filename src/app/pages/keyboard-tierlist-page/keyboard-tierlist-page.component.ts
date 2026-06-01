import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TierlistDataService, KeyboardTierGroup } from '../../services/tierlist-data.service';

@Component({
  selector: 'app-keyboard-tierlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard-tierlist-page.component.html',
  styleUrl: './keyboard-tierlist-page.component.css'
})
export class KeyboardTierlistPageComponent implements OnInit {
  tierGroups: KeyboardTierGroup[] = [];
  activeFilter: string = 'all';
  searchQuery: string = '';

  layouts = ['all', '60%', '65%', '75%', '80%'];

  constructor(private dataService: TierlistDataService) {}

  ngOnInit(): void {
    this.tierGroups = this.dataService.getKeyboardTierGroups();
  }

  setFilter(layout: string): void {
    this.activeFilter = layout;
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
  }

  filteredItems(group: KeyboardTierGroup) {
    return group.items.filter(item => {
      const matchLayout = this.activeFilter === 'all' || item.layout.includes(this.activeFilter.replace('%',''));
      const matchSearch = !this.searchQuery ||
        item.brand.toLowerCase().includes(this.searchQuery) ||
        item.model.toLowerCase().includes(this.searchQuery) ||
        item.note.toLowerCase().includes(this.searchQuery);
      return matchLayout && matchSearch;
    });
  }

  hasVisibleItems(group: KeyboardTierGroup): boolean {
    return this.filteredItems(group).length > 0;
  }

  getRecommendClass(recommend: string): string {
    if (recommend.includes('👑')) return 'rec-crown';
    if (recommend.includes('🔥')) return 'rec-fire';
    if (recommend.includes('⭐')) return 'rec-star';
    if (recommend.includes('💀') || recommend.includes('🤡')) return 'rec-avoid';
    if (recommend.includes('❌')) return 'rec-bad';
    return 'rec-neutral';
  }
}
