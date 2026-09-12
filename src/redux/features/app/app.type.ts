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

export interface TripItem {
    id: number;
    client_name: string;
    email: string;
    visa: string;
    city: string;
    timeline: string;
    guide_name: string;
    property_views?: number;
    created_at?: string;
    updated_at?: string;
}

export interface GetMyTripsResponse {
    total: number;
    trips: TripItem[];
}
