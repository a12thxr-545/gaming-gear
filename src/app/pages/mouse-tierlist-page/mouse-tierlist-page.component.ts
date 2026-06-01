import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GearDataService } from '../../services/gear-data.service';
import { MouseTier, MouseItem } from '../../models/gear.model';

@Component({
  selector: 'app-mouse-tierlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-tierlist-page.component.html',
  styleUrl: './mouse-tierlist-page.component.css'
})
export class MouseTierlistPageComponent implements OnInit {
  mouseTiers: MouseTier[] = [];
  activeFilter = 'all';
  searchQuery = '';

  filters = [
    { value: 'all', label: 'All Categories' },
    { value: 'budget', label: 'Budget' },
    { value: 'worth', label: 'Worth It' },
    { value: 'ergo', label: 'Ergo' }
  ];

  constructor(private gearDataService: GearDataService) {}

  ngOnInit(): void {
    this.mouseTiers = this.gearDataService.getMouseTiers();
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
  }

  get filteredTiers(): MouseTier[] {
    return this.mouseTiers
      .map(tier => {
        // Filter the items within each tier
        const filteredItems = tier.items.filter(item => {
          const matchesSearch = !this.searchQuery ||
            item.name.toLowerCase().includes(this.searchQuery) ||
            item.description.toLowerCase().includes(this.searchQuery);
          
          return matchesSearch;
        });

        return {
          ...tier,
          items: filteredItems
        };
      })
      .filter(tier => {
        // Only keep the tier if it matches our category filter AND has items after search
        const matchesCategory = this.activeFilter === 'all' || tier.tier === this.activeFilter;
        return matchesCategory && tier.items.length > 0;
      });
  }

  get totalFilteredMiceCount(): number {
    return this.filteredTiers.reduce((acc, tier) => acc + tier.items.length, 0);
  }
}
