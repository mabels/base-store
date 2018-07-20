import { Msg, MsgInit } from '../types/msg';
import { Match, MatchType } from '../types/match';
import { PouchConfigInit } from '../types/pouch-config';
import { Typeable } from '../types/typeable';

export interface PouchConnectionReqInit extends MatchType {
  readonly config: PouchConfigInit;
}

export class PouchConnectionReq extends Typeable implements PouchConnectionReqInit {
  public readonly msg: MsgInit;
  public readonly config: PouchConfigInit;

  public static is(msg: any): Match<PouchConnectionReq> {
    if (msg instanceof PouchConnectionReq) {
      // console.log(`Match:FeedDone`, msg);
      return Match.create<PouchConnectionReq>(msg);
    }
    return Match.nothing();
  }

  constructor(pcri: PouchConnectionReqInit) {
    super(pcri);
    this.msg = Msg.toObj(pcri.msg);
    this.config = pcri.config;
  }

}
