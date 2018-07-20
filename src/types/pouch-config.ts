
export interface PouchConfigInit {
  readonly path: string;
  readonly dbConfig?: PouchDB.Configuration.DatabaseConfiguration;
}

export class PouchConfig implements PouchConfigInit {
  public readonly path: string;
  public readonly dbConfig?: PouchDB.Configuration.DatabaseConfiguration;

  constructor(pci: PouchConfigInit) {
    this.path = pci.path;
    this.dbConfig = pci.dbConfig;
  }

  public asObj(): PouchConfigInit {
    return {
      path: this.path,
      dbConfig: this.dbConfig
    };
  }

}
