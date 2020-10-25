import { ProtocolItemType } from './protocolItemType.enum';

export interface ProtocolItemModel{
    Name: string;
    OrdName: string;
    Value: number;
    Prcnt?: bigint;
    Type: ProtocolItemType
}