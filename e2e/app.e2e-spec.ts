import { NgTrainingPage } from './app.po';

describe('ng-training App', () => {
  let page: NgTrainingPage;

  beforeEach(() => {
    page = new NgTrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
