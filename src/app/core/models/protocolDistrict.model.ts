import { ProtocolDistrictItemModeel } from './protocolDistrictItem.model';

export interface ProtocolDistrictModel{
    Count: number;
    CountCompleted: number;
    PrcntCompleted: bigint;
    Items: ProtocolDistrictItemModeel[];
}