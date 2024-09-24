export class Utils {
  static addAnimationClass(element: HTMLElement, animationClass: string): void {
    if (!element.classList.contains(animationClass)) {
      element.classList.add(animationClass);
    }
  }
}
