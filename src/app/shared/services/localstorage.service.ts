export class LocalStorageService {

  static setBooleanItem(key: string, value : boolean): void {
    return localStorage.setItem(key, '' + value);
  }

  static setStringItem(key: string, value : string): void {
    return localStorage.setItem(key, value);
  }

  static setNumberItem(key: string, value : number): void {
    return localStorage.setItem(key, '' + value);
  }

  static getBooleanItem(key: string): boolean {
    let value: string = localStorage.getItem(key);
    return value ? value === 'true' : false;
  }

  static getStringItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  static getNumberItem(key: string): number | null {
    let value: string = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  static clear(): void {
    localStorage.clear();
  }
}