import { ScoutsPage } from './app.po';

describe('scouts App', () => {
  let page: ScoutsPage;

  beforeEach(() => {
    page = new ScoutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
