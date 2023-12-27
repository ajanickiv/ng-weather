import { Injectable } from '@angular/core'

@Injectable()
export class StorageService {
    setItem(key: string, value: [] | {}): void {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getItem(key: string): string | null {
        return localStorage.getItem(key)
    }

    removeItem(key: string): void {
        localStorage.removeItem(key)
    }

    clearItems(): void {
        localStorage.clear()
    }
}
