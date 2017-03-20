import { TrainsPage } from './app.po';

describe('trains App', function() {
  let page: TrainsPage;

  beforeEach(() => {
    page = new TrainsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
