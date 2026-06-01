import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseTier } from '../../models/gear.model';
import { GearDataService } from '../../services/gear-data.service';

@Component({
  selector: 'app-mouse-tierlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mouse-tierlist.component.html',
  styleUrl: './mouse-tierlist.component.css'
})
export class MouseTierlistComponent implements OnInit {
  mouseTiers: MouseTier[] = [];

  constructor(private gearDataService: GearDataService) {}

  ngOnInit(): void {
    this.mouseTiers = this.gearDataService.getMouseTiers();
  }

  getStoreIcon(store: string): string {
    const icons: Record<string, string> = {
      shopee: '🛒',
      aliexpress: '📦',
      lazada: '🏪'
    };
    return icons[store] ?? '🔗';
  }
}
