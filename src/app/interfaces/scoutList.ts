import { ScoutType } from "app/enums/ScoutType";

export interface ScoutList {
    scoutId: number;
    first: string;
    last: string;
    memberNumber: string;
    section: ScoutType;
}