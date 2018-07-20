import { Msg, MsgInit } from '../types/msg';
import { Match, MatchType } from '../types/match';
import { PouchConfigInit } from '../types/pouch-config';
import { Typeable } from '../types/typeable';

export interface PouchConnectionResInit extends MatchType {
  readonly created?: Date;
  readonly config: PouchConfigInit;
  readonly pouchDb: PouchDB.Database;
}

export class PouchConnectionRes extends Typeable implements PouchConnectionResInit {
  public readonly msg: MsgInit;
  public readonly created: Date;
  public readonly config: PouchConfigInit;
  public readonly pouchDb: PouchDB.Database;

  public static is(msg: Msg): Match<PouchConnectionRes> {
    if (msg instanceof PouchConnectionRes) {
      // console.log(`Match:FeedDone`, msg);
      return Match.create<PouchConnectionRes>(msg);
    }
    return Match.nothing();
  }

  constructor(pcri: PouchConnectionResInit) {
    super(pcri);
    this.msg = Msg.toObj(pcri.msg);
    this.created = this.created || (new Date());
    this.config = pcri.config;
    this.pouchDb = pcri.pouchDb;
  }

}
