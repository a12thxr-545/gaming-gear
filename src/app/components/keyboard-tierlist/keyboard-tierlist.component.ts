import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardItem } from '../../models/gear.model';
import { GearDataService } from '../../services/gear-data.service';

@Component({
  selector: 'app-keyboard-tierlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard-tierlist.component.html',
  styleUrl: './keyboard-tierlist.component.css'
})
export class KeyboardTierlistComponent implements OnInit {
  keyboards: KeyboardItem[] = [];

  constructor(private gearDataService: GearDataService) {}

  ngOnInit(): void {
    this.keyboards = this.gearDataService.getKeyboards();
  }

  getLayoutColor(layout: string): string {
    const colors: Record<string, string> = {
      '60%': '#ff3b30',
      '65%': '#ff9500',
      '75%': '#34c759',
      '80% / TKL': '#5e5ce6'
    };
    return colors[layout] ?? '#0a84ff';
  }
}
