import * as uuid from 'uuid';
import * as path from 'path';
import { mkdir } from 'fs';

import { assert } from 'chai';

import {
  MsgBus,
  PouchConnectionPoolProcessor,
  PouchConnectionReq,
  PouchConnectionRes
} from '../src/index';

describe('pouchdb connection pool', () => {
  before((done) => {
    mkdir('.pdb', () => done());
  });

  it('create-connection', (done) => {
    const bus = new MsgBus();
    let pouchDb: PouchDB.Database;
    let tid = uuid.v4();
    PouchConnectionPoolProcessor.create(bus);
    bus.subscribe(msg => {
      PouchConnectionRes.is(msg).hasTid(tid).match(pcr => {
        pcr.pouchDb.get('testId').then(r => {
          assert.fail('never call');
        }).catch(e => {
          try {
            if (e.name == 'not_found') {
              if (!pouchDb) {
                pouchDb = pcr.pouchDb;
                tid = uuid.v4();
                bus.next(new PouchConnectionReq({
                  tid: tid,
                  config: {
                    path: pcr.config.path
                  }
                }));
              } else {
                assert.equal(pouchDb, pcr.pouchDb);
                done();
              }
            } else {
              assert.fail('never call');
            }
          } catch (e) {
            done(e);
          }
        });
      });
    });
    bus.next(new PouchConnectionReq({
      tid: tid,
      config: {
        path: path.join('.pdb', tid)
      }
    }));
  });

});
