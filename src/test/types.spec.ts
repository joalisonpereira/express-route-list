import { CONFIG_TEMPLATES } from 'src/types';
import { describe, expect, it } from 'vitest';

describe('CONFIG_TEMPLATES', () => {
  it('should test config templates var', () => {
    expect(CONFIG_TEMPLATES).toBeDefined();

    expect(CONFIG_TEMPLATES.js).toBeDefined();

    expect(CONFIG_TEMPLATES.ts).toBeDefined();
  });
});
