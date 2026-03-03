export function logRequest(config: any, debug: boolean) {
    if (!debug) return;

    console.group(`API → ${config.method?.toUpperCase()} ${config.url}`);
    console.log("Headers:", config.headers);
    console.log("Body:", config.data);
    console.groupEnd();
}

export function logResponse(res: any, debug: boolean) {
    if (!debug) return;

    console.group(`API ← ${res.config.url}`);
    console.log("Response:", res.data);
    console.groupEnd();
}
