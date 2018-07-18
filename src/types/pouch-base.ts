import * as url from 'url';
import * as uuid from 'uuid';

export interface PouchBaseInit {
  readonly _id: string;
  readonly type: string;
  readonly created: string;
}

export class PouchBase {
  public readonly _id: string;
  public readonly type: string;
  public readonly created: string;

  constructor(pbi: PouchBaseInit = {
    _id: undefined,
    type: undefined,
    created: undefined
  }) {
    this.type = pbi.type || this.constructor.name;
    this._id = pbi._id || url.resolve(this.type, uuid.v4());
    this.created = pbi._id || (new Date()).toISOString();
    // console.log(`ShaPouchDocV1:ShaPouchDocV1`, this.type);
  }

  public asObj(): PouchBaseInit {
    return {
      _id: this._id,
      type: this.type,
      created: this.created,
    };
  }

}
