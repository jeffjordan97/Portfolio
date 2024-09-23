import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavbarService } from '../../shared/directives/navbar/navbar.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationItem, navigationItems } from './types/navigation-item';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  animations: [],
})
export class NavigationComponent implements OnInit {
  @ViewChild('navigationWrapper', { static: true }) navbarElement!: ElementRef;
  @ViewChild('menuBtn') menuBtn!: ElementRef<HTMLInputElement>; // Menu button element reference
  @ViewChild('menu') menu!: ElementRef<HTMLUListElement>; // Menu element reference

  isDarkTheme = false; // Variable to track the current theme

  navigationItems = navigationItems;

  isNavHidden: boolean = false;

  constructor(
    private navbarService: NavbarService,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.menuLinkClickedListener();
    // this.clickOutsideMenuListener();
    // this.subscribeToRouterEvents();
    this.applyStoredTheme();
  }

  // Apply stored theme from localStorage or match system preferences
  applyStoredTheme(): void {
    const storedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
    this.isDarkTheme = storedTheme === 'dark'; // Set isDarkTheme based on the stored theme
    document.documentElement.setAttribute('data-theme', storedTheme);
  }

  // Toggle between light and dark themes
  toggleTheme(): void {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';

    this.isDarkTheme = targetTheme === 'dark'; // Update isDarkTheme
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
  }

  private subscribeToRouterEvents() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const element = document.querySelector(`#${fragment}`);
          if (element)
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
        }
      }
    });
  }

  private menuLinkClickedListener() {
    // Listen for click events on the menu items
    this.menu.nativeElement.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => this.hideMenu());
    });
  }

  // Listens for click events on the entire document. If a click occurs outside the menu and menu button, checks the window width and hides the menu if window width is 768px or less
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (
      !this.elementRef.nativeElement.contains(target) &&
      this.menuBtn.nativeElement.checked
    ) {
      this.hideMenu();
    }
  }

  // Unchecks menu button, which hides the menu
  hideMenu() {
    if (this.menuBtn.nativeElement.checked) {
      this.menuBtn.nativeElement.checked = false;
    }
  }

  private clickOutsideMenuListener() {
    const menuLinks = document.querySelectorAll('.header li a');

    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const menuBtn = document.getElementById('menu-btn') as HTMLInputElement;
        menuBtn.checked = false;
      });
    });
  }

  @HostListener('window:scroll', []) // Listens for scroll events and executes the onWindowScroll function
  onWindowScroll(): void {
    // const currentScroll = window.scrollY || document.documentElement.scrollTop;
    // if (Math.abs(this.lastScrollTop - currentScroll) <= this.delta) {
    //   return;
    // }
    // if (
    //   currentScroll > this.lastScrollTop &&
    //   currentScroll > this.navbarHeight
    // ) {
    //   // Scrolling Down
    //   this.isNavHidden = true;
    // } else if (
    //   currentScroll + window.innerHeight <
    //   document.body.scrollHeight
    // ) {
    //   // Scrolling Up
    //   this.isNavHidden = false;
    // }
    // this.lastScrollTop = currentScroll;
  }
}
