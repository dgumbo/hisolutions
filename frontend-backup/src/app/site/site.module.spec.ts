import { SiteModule } from './site.module';

describe('SiteModule', () => {
  let mainModule: SiteModule;

  beforeEach(() => {
    mainModule = new SiteModule();
  });

  it('should create an instance', () => {
    expect(mainModule).toBeTruthy();
  });
});
