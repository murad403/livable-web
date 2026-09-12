export interface BookTalkWithUsRequest {
    full_name: string;
    email: string;
    phone_number: string;
    relocation_process_type: string;
    considering_places_type: string;
    scouting_people_type: string;
}

export interface BookTalkWithUsResponse {
    id?: number;
    full_name?: string;
    email?: string;
    phone_number?: string;
    relocation_process_type?: string;
    considering_places_type?: string[];
    scouting_people_type?: string;
    created_at?: string;
    message?: string;
    detail?: string;
    [key: string]: any;
}
