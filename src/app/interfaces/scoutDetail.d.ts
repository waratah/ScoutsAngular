import { ScoutType } from '../enums/scoutType';

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