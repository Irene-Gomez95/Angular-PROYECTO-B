import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCharacterDetailsComponent } from './list-character-details.component';

describe('ListCharacterDetailsComponent', () => {
  let component: ListCharacterDetailsComponent;
  let fixture: ComponentFixture<ListCharacterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCharacterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCharacterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
