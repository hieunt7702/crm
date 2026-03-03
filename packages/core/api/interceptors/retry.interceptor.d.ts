import type { AxiosError } from "axios";
export declare function retryInterceptor(retries?: number, delay?: number): (error: AxiosError) => Promise<any>;
