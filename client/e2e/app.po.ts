import { browser, element, by } from 'protractor';

export class TasksNg2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ta-root h1')).getText();
  }
}
