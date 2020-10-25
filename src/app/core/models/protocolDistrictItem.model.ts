import { ProtocolItemType } from './protocolItemType.enum';

export interface ProtocolDistrictItemModeel{
    Name: string;
    OrdName: string;
    Value: number;
    Prcnt: bigint;
    Type: ProtocolItemType;
}