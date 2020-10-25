import { DistrictModel } from './district.model';

export interface VoteModel {
    Id: number;
    Name: string;
    Districts: DistrictModel[];
}