import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KeyboardTierlistComponent } from '../../components/keyboard-tierlist/keyboard-tierlist.component';
import { MouseTierlistComponent } from '../../components/mouse-tierlist/mouse-tierlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, KeyboardTierlistComponent, MouseTierlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
