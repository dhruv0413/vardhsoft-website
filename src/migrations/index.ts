import * as migration_20260704_075052_add_seo_metadata_fields from './20260704_075052_add_seo_metadata_fields';

export const migrations = [
  {
    up: migration_20260704_075052_add_seo_metadata_fields.up,
    down: migration_20260704_075052_add_seo_metadata_fields.down,
    name: '20260704_075052_add_seo_metadata_fields'
  },
];
