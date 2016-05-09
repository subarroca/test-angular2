export class TestAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-angular2-app h1')).getText();
  }
}
