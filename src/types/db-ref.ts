import * as url from 'url';
import * as uuid from 'uuid';

export interface DbRefInit {
  readonly _id?: string;
  readonly type?: string;
  readonly created?: string;
  readonly error?: Error;
}

export class DbRef implements DbRefInit {
  public readonly _id: string;
  public readonly type: string;
  public readonly created: string;
  public readonly error?: Error;

  public static toObj(my: DbRefInit): DbRefInit {
    return {
      _id: my._id,
      type: my.type,
      created: my.created,
      error: my.error
    };
  }

  constructor(pbi: DbRefInit = {
    _id: undefined,
    type: undefined,
    created: undefined,
    error: undefined
  }) {
    this.type = pbi.type || 'unknown';
    this._id = pbi._id || url.resolve(this.type, uuid.v4());
    this.created = pbi._id || (new Date()).toISOString();
    this.error = pbi.error;
    // console.log(`ShaPouchDocV1:ShaPouchDocV1`, this.type);
  }

  public isOk(): boolean {
    return !this.error;
  }

  public asObj(): DbRefInit {
    return DbRef.toObj(this);
  }

}
