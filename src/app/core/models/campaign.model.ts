import { VoteModel } from './vote.model';
export interface CampaignModel{
    Id: number;
    VoteDate: Date;
    Votes: VoteModel[];
    Complete: boolean;
}