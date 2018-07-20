import { MsgInit } from './msg';
import { TypeableInit } from './typeable';

export interface MatchType extends TypeableInit {
  readonly msg: MsgInit;
}
export class Match<T extends MatchType> {
  public readonly matchType: T;

  public static create<T extends MatchType>(t: T): Match<T> {
    return new Match(t);
  }

  public static nothing<T extends MatchType>(): Match<T> {
    return new Match(null);
  }

  private constructor(t: T) {
    this.matchType = t;
  }

  public hasTid(matchTypeOrString: MatchType | string): Match<T> {
    let msgTid: string;
    if (typeof (matchTypeOrString) == 'string') {
      msgTid = matchTypeOrString;
    } else if (matchTypeOrString.msg && this.matchType) {
      msgTid = matchTypeOrString.msg.tid;
    }
    if (this.matchType && msgTid === this.matchType.msg.tid) {
      return this;
    }
    return Match.nothing();
  }

  public get matched(): boolean {
    return !!this.matchType;
  }

  public match(cb: (t: T) => void): void {
    if (this.matchType) {
      cb(this.matchType);
    }
  }
}
