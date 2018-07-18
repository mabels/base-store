import { Msg } from '../types/msg';
import { Match } from '../types/match';
import { PouchConfigObj } from '../types/pouch-config';

export class PouchConnectionReq extends Msg {

  public readonly config: PouchConfigObj;

  public static is(msg: any): Match<PouchConnectionReq> {
    if (msg instanceof PouchConnectionReq) {
      // console.log(`Match:FeedDone`, msg);
      return Match.create<PouchConnectionReq>(msg);
    }
    return Match.nothing();
  }

  constructor(tid: string, pc: PouchConfigObj) {
    super(tid);
    this.config = pc;
  }

}
