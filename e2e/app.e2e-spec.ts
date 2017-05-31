import { GuideCompletePage } from './app.po';

describe('guide-complete App', () => {
  let page: GuideCompletePage;

  beforeEach(() => {
    page = new GuideCompletePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
