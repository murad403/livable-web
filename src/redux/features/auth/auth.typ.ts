export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    access?: string;
    refresh?: string;
    token?: string;
    data?: {
        access?: string;
        refresh?: string;
        token?: string;
        [key: string]: any;
    };
    message?: string;
    detail?: string;
    [key: string]: any;
}
