export class RequestCanceler {
    private controller?: AbortController;

    get signal() {
        this.controller = new AbortController();
        return this.controller.signal;
    }

    cancel() {
        this.controller?.abort();
    }
}
