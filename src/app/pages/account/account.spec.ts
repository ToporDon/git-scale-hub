import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPage } from './account';

describe('AccountComponent', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});