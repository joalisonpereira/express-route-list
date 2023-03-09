import { ALL_METHODS_COUNT, CONFIG_FILE_NAME } from 'src/types';
import { describe, expect, it } from 'vitest';

describe('Types', () => {
  it('should test config templates var', () => {
    expect(ALL_METHODS_COUNT).toBeDefined();

    expect(CONFIG_FILE_NAME).toBeDefined();
  });
});
