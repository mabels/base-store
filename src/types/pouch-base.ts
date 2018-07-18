import * as url from 'url';
import * as uuid from 'uuid';

export class PouchBase {
  public readonly _id: string;
  public readonly type: string;
  public readonly created: string;

  constructor() {
    this.type = this.constructor.name;
    // console.log(`ShaPouchDocV1:ShaPouchDocV1`, this.type);
    this._id = url.resolve(this.type, uuid.v4());
    this.created = (new Date()).toISOString();
  }

  public asObj(): PouchBase {
    throw new Error('PouchBase need to implement asObj');
  }

}
