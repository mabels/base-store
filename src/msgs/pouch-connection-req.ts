import { Msg, MsgInit } from '../types/msg';
import { Match } from '../types/match';
import { PouchConfigObj } from '../types/pouch-config';

export interface PouchConnectionReqInit extends MsgInit {
  readonly config: PouchConfigObj;
}

export class PouchConnectionReq extends Msg implements PouchConnectionReqInit {

  public readonly config: PouchConfigObj;

  public static is(msg: any): Match<PouchConnectionReq> {
    if (msg instanceof PouchConnectionReq) {
      // console.log(`Match:FeedDone`, msg);
      return Match.create<PouchConnectionReq>(msg);
    }
    return Match.nothing();
  }

  constructor(pcri: PouchConnectionReqInit) {
    super(pcri);
    this.config = pcri.config;
  }

}
