import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsViewComponent } from './tags-view.component';

describe('TagsViewComponent', () => {
  let component: TagsViewComponent;
  let fixture: ComponentFixture<TagsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsViewComponent]
    });
    fixture = TestBed.createComponent(TagsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
