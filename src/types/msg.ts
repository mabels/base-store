import * as uuid from 'uuid';
import { MsgBus } from '../msg-bus';
import { Match, MatchType } from './match';

export interface MsgInit {
  readonly id?: string;
  readonly tid?: string;
}

export class Msg implements MsgInit {
  // public readonly id: string;
  // public readonly tid: string;

  public static toObj(msg: MsgInit): MsgInit {
    return {
      id: msg.id || uuid.v4(),
      tid: msg.tid || uuid.v4(),
    };
  }
  // public static is<T extends Msg>(msg: Msg): Match<T> {
  //   throw new Error('missing is implementation');
  // }

  // public static subscribe(bus: MsgBus): void {
  //   bus.subscribe(msg => {
  //     this.is(msg);
  //   });
  // }

  // public constructor(mi: MsgInit) {
  //   this.tid = mi.tid || uuid.v4();
  //   this.id = mi.id || uuid.v4();
  // }

  // public get type(): string {
  //   return this.constructor.name;
  // }

  // public asObj(): MsgInit {
  //   return Msg.toObj(this);
  // }

}
