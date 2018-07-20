export interface TypeableInit {
  readonly type?: string;
}

export abstract class Typeable implements TypeableInit {
  public _type: string;

  public constructor(mt: TypeableInit) {
    this._type = mt.type;
  }

  public get type(): string {
    return this._type || this.constructor.name;
  }

}
