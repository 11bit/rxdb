/**
 * this is the main entry-point for custom builds
 * it can be used as standalone but is also used in the batteries-included main-export
 */
import './types/modules/graphql-client.d';
import './types/modules/mocha.parallel.d';
import './types/modules/modifiyjs.d';
export { addRxPlugin } from './plugin';
export { createRxDatabase, removeRxDatabase, isRxDatabase, dbCount, _collectionNamePrimary // used in tests
} from './rx-database';
export { overwritable } from './overwritable';
export { isRxCollection, RxCollectionBase, createRxCollection // used in tests
} from './rx-collection';
export { _handleFromStorageInstance, _handleToStorageInstance, fillObjectDataBeforeInsert } from './rx-collection-helper';
export { isRxDocument } from './rx-document';
export { flattenEvents } from './rx-change-event';
export { getDocumentOrmPrototype, getDocumentPrototype } from './rx-document-prototype-merge';
export { isInstanceOf as isRxQuery, normalizeMangoQuery } from './rx-query';
export { isInstanceOf as isRxSchema, createRxSchema, RxSchema, getIndexes, normalizeRxJsonSchema, getFinalFields, getPreviousVersions, toTypedRxJsonSchema } from './rx-schema';
export { getPseudoSchemaForVersion, getSchemaByObjectPath } from './rx-schema-helper';
export { findLocalDocument, getSingleDocument, getAllDocuments, writeSingleLocal, writeSingle, countAllUndeleted, getBatch } from './rx-storage-helper';
export { _clearHook // used in tests
} from './hooks';
export { createCrypter // used in tests
} from './crypter';
export * from './query-cache';
export * from './util'; // TODO how to do 'export type * ..' ?
//# sourceMappingURL=core.js.map