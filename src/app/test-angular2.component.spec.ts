import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestAngular2AppComponent } from '../app/test-angular2.component';

beforeEachProviders(() => [TestAngular2AppComponent]);

describe('App: TestAngular2', () => {
  it('should create the app',
      inject([TestAngular2AppComponent], (app: TestAngular2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-angular2 works!\'',
      inject([TestAngular2AppComponent], (app: TestAngular2AppComponent) => {
    expect(app.title).toEqual('test-angular2 works!');
  }));
});
