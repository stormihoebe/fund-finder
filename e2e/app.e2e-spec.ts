import { FundFinderPage } from './app.po';

describe('fund-finder App', () => {
  let page: FundFinderPage;

  beforeEach(() => {
    page = new FundFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
