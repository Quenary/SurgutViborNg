import { ProtocolDistrictItemModeel } from './protocolDistrictItem.model';

export interface ProtocolDistrictModel{
    Count: number;
    Countcompleted: number;
    PrcntCompleted: bigint;
    Items: ProtocolDistrictItemModeel[];
}