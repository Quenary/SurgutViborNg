import { ProtocolItemModel } from './protocolItem.model';
import { ProtocolState } from './protocolState.enum';

export interface ProtocolModel{
    State: ProtocolState;
    UpdatedAt: Date;
    Items: ProtocolItemModel[]
}