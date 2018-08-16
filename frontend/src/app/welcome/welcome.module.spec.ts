import { WelcomeModule } from './welcome.module';

describe('CoreModule', () => {
  let coreModule: WelcomeModule;

  beforeEach(() => {
    coreModule = new WelcomeModule();
  });

  it('should create an instance', () => {
    expect(coreModule).toBeTruthy();
  });
});
