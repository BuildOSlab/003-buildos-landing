import { validateConfig } from '../validate';

const originalEnv = process.env;

function setNodeEnv(value: string): void {
  Object.defineProperty(process.env, 'NODE_ENV', {
    value,
    configurable: true,
    writable: true,
  });
}

beforeEach(() => {
  process.env = { ...originalEnv };
});

afterAll(() => {
  process.env = originalEnv;
});

describe('validateConfig', () => {
  describe('production', () => {
    beforeEach(() => {
      setNodeEnv('production');
    });

    test('throws when AUTH_API_URL is missing', () => {
      delete process.env.AUTH_API_URL;

      expect(validateConfig).toThrow(/Production requires AUTH_API_URL/i);
    });

    test('throws when AUTH_API_URL is empty string', () => {
      process.env.AUTH_API_URL = '   ';

      expect(validateConfig).toThrow(/Production requires AUTH_API_URL/i);
    });

    test('throws when AUTH_API_URL uses HTTP', () => {
      process.env.AUTH_API_URL = 'http://localhost:8018';

      expect(validateConfig).toThrow(/HTTPS/i);
    });

    test('passes when AUTH_API_URL uses HTTPS', () => {
      process.env.AUTH_API_URL = 'https://auth.buildos.com';

      expect(validateConfig).not.toThrow();
    });
  });

  describe('development', () => {
    beforeEach(() => {
      setNodeEnv('development');
    });

    test('does not throw when AUTH_API_URL is missing (warns)', () => {
      const warnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => undefined);

      delete process.env.AUTH_API_URL;

      expect(validateConfig).not.toThrow();
      expect(warnSpy).toHaveBeenCalled();

      warnSpy.mockRestore();
    });

    test('does not throw when AUTH_API_URL uses HTTP (warns)', () => {
      const warnSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(() => undefined);

      process.env.AUTH_API_URL = 'http://localhost:8018';

      expect(validateConfig).not.toThrow();
      expect(warnSpy).toHaveBeenCalled();

      warnSpy.mockRestore();
    });

    test('passes when AUTH_API_URL is valid HTTPS', () => {
      process.env.AUTH_API_URL = 'https://auth.buildos.com';

      expect(validateConfig).not.toThrow();
    });
  });
});
