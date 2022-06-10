import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbclientsComponent } from './dbclients.component';

describe('DbclientsComponent', () => {
  let component: DbclientsComponent;
  let fixture: ComponentFixture<DbclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbclientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
