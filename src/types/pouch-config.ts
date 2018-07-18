
export interface PouchConfigObj {
  readonly path: string;
  readonly dbConfig?: PouchDB.Configuration.DatabaseConfiguration;
}

export class PouchConfig implements PouchConfigObj {
  public readonly path: string;
  public readonly dbConfig?: PouchDB.Configuration.DatabaseConfiguration;

  constructor(pci: PouchConfigObj) {
    this.path = pci.path;
    this.dbConfig = pci.dbConfig;
  }

  public asObj(): PouchConfigObj {
    return {
      path: this.path,
      dbConfig: this.dbConfig
    };
  }

}
