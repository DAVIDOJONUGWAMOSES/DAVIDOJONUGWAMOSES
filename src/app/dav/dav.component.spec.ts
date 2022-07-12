import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavComponent } from './dav.component';

describe('DavComponent', () => {
  let component: DavComponent;
  let fixture: ComponentFixture<DavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
