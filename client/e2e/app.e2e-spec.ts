import { TasksNg2Page } from './app.po';

describe('tasks-ng2 App', function() {
  let page: TasksNg2Page;

  beforeEach(() => {
    page = new TasksNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ta works!');
  });
});
