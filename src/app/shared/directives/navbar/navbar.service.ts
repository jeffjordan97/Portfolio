import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private navbarHeightSubject = new BehaviorSubject<number>(0); // Default height

  // Observable to expose the navbar height
  navbarHeight$: Observable<number> = this.navbarHeightSubject.asObservable();

  // Method to update the navbar height
  setNavbarHeight(height: number): void {
    this.navbarHeightSubject.next(height);
  }
}
