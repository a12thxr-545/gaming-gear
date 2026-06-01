import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TierlistDataService } from '../../services/tierlist-data.service';
import { IemItem } from '../../models/gear.model';

@Component({
  selector: 'app-iem-tierlist-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iem-tierlist-page.component.html',
  styleUrl: './iem-tierlist-page.component.css'
})
export class IemTierlistPageComponent implements OnInit {
  iems: IemItem[] = [];
  searchQuery = '';
  activeGame: string = 'all';
  games = ['all', 'valorant', 'cs2', 'pubg', 'apex'];

  constructor(private dataService: TierlistDataService) {}

  ngOnInit(): void {
    this.iems = this.dataService.getIemItems();
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
  }

  setGame(game: string): void {
    this.activeGame = game;
  }

  get filteredIems(): IemItem[] {
    return this.iems.filter(item => {
      const matchSearch = !this.searchQuery ||
        item.name.toLowerCase().includes(this.searchQuery) ||
        item.comment.toLowerCase().includes(this.searchQuery);
      const matchGame = this.activeGame === 'all' ||
        !!item[this.activeGame as keyof IemItem];
      return matchSearch && matchGame;
    });
  }

  getGameScore(item: IemItem, game: string): string {
    return (item as any)[game] || '';
  }

  getScoreClass(score: string): string {
    if (!score) return '';
    if (score.startsWith('S')) return 'score-s';
    if (score.startsWith('A+') || score === 'A++') return 'score-aplus';
    if (score.startsWith('A')) return 'score-a';
    if (score.startsWith('B+')) return 'score-bplus';
    if (score.startsWith('B')) return 'score-b';
    if (score.startsWith('C')) return 'score-c';
    if (score.startsWith('D') || score.startsWith('E') || score.startsWith('F')) return 'score-f';
    return '';
  }

  formatPrice(price: string): string {
    if (!price) return '';
    const n = parseInt(price);
    if (isNaN(n)) return price;
    return n >= 1000 ? `฿${n.toLocaleString()}` : `฿${price}`;
  }
}
