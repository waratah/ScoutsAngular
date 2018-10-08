import { ScoutType } from '../enums/scoutType';

export interface ScoutList {
    scoutId: number;
    first: string;
    last: string;
    memberNumber: string;
    section: ScoutType;
}