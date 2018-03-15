import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceaddComponent } from './resourceadd.component';

describe('ResourceaddComponent', () => {
  let component: ResourceaddComponent;
  let fixture: ComponentFixture<ResourceaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
