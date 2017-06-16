import { ScoutType } from "app/enums/ScoutType";

export interface ScoutDetail {
    scoutId: number;
    firstName: string;
    lastName: string;
    memberNumber: string;
    section: ScoutType;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    dOB: string;
    startDate: string;
    endDate: string;
    medical: string;
    active: boolean;
    balance: number;
    email: string;
}