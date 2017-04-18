import { Angularfire2Page } from './app.po';

describe('angularfire2 App', () => {
  let page: Angularfire2Page;

  beforeEach(() => {
    page = new Angularfire2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
