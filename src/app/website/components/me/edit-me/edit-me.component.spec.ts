import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeComponent } from './edit-me.component';

describe('EditMeComponent', () => {
  let component: EditMeComponent;
  let fixture: ComponentFixture<EditMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
