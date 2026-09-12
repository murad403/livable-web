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

export interface ChangePasswordRequest {
    current_password: string;
    new_password: string;
    confirm_new_password: string;
}

export interface ChangePasswordResponse {
    detail?: string;
    message?: string;
    [key: string]: any;
}
