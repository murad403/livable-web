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

export interface FinancialProfileRequest {
    motivating_factors?: string;
    share_your_opinion?: string;
    comfortable_housing_budget?: string;
    stretched_housing_budget?: string;
    monthly_living_budget_target?: string;
    financial_expectation?: string;
    general_monthly_living_budget_target?: string;
    income_route?: string;
    willing_tradeoffs?: string;
    practical_constraints?: string;
    specific_codes_worried_about?: string;
    financial_excitement_factors?: string;
    [key: string]: any;
}

export interface FinancialProfileResponse {
    id?: number;
    message?: string;
    detail?: string;
    [key: string]: any;
}

export interface LifestyleAlignmentRequest {
    daily_life_desires?: string;
    good_weekday?: string;
    good_weekend?: string;
    routines_real_life?: string;
    day_looked_like?: string;
    environmental_pull_factors?: string;
    anything_to_add?: string;
    internal_pull_factors?: string;
    shadow_fear?: string;
    anchor_aspiration?: string;
    imagine_life_working?: string;
    emotions_hope_to_feel?: string;
    success_picture?: string;
    [key: string]: any;
}

export interface LifestyleAlignmentResponse {
    id?: number;
    daily_life_desires?: string[];
    good_weekday?: string;
    good_weekend?: string;
    routines_note?: string;
    current_day_description?: string;
    environmental_pull_factors?: string[];
    environmental_pull_note?: string;
    internal_pull_factors?: string[];
    internal_pull_note?: string;
    shadow_fear?: string;
    anchor_aspiration?: string;
    success_picture?: string;
    desired_emotions?: string;
    glad_i_did_this_moment?: string;
    routines_real_life?: string;
    day_looked_like?: string;
    anything_to_add?: string;
    imagine_life_working?: string;
    emotions_hope_to_feel?: string;
    created_at?: string;
    updated_at?: string;
    message?: string;
    detail?: string;
    [key: string]: any;
}
