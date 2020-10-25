import { DistrictModel } from './district.model';

export interface UikModel{
    Id: number;
    CampaignId: number;
    Ord: number;
    Districts: DistrictModel[];
}