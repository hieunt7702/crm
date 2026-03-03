// core/utils/storage.ts
export interface StorageAdapter {
    get(key: string): Promise<string | null>
    set(key: string, value: string): Promise<void>
}
