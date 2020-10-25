import { VotingProcessUikItemModeel } from './VotingProcessUikItem.model';

export interface VotingUikItemModeel{
    UikOrd: number;
    UikId: number;
    Items: VotingProcessUikItemModeel[];
}