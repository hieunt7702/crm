export declare class RequestCanceler {
    private controller?;
    get signal(): AbortSignal;
    cancel(): void;
}
