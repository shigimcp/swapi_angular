import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmContainerComponent } from './film-container.component';

describe('FilmContainerComponent', () => {
  let component: FilmContainerComponent;
  let fixture: ComponentFixture<FilmContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
