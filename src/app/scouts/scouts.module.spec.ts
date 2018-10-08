import { ScoutsModule } from './scouts.module';

describe('ScoutsModule', () => {
  let scoutsModule: ScoutsModule;

  beforeEach(() => {
    scoutsModule = new ScoutsModule();
  });

  it('should create an instance', () => {
    expect(scoutsModule).toBeTruthy();
  });
});
