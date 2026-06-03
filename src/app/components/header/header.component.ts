import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  isLight = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isLight = true;
        document.documentElement.classList.add('light-theme');
      } else {
        this.isLight = false;
        document.documentElement.classList.remove('light-theme');
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleTheme(): void {
    this.isLight = !this.isLight;
    if (typeof window !== 'undefined') {
      if (this.isLight) {
        document.documentElement.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      }
    }
  }
}
