import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovalentApiComponent } from './covalent-api.component';

describe('CovalentApiComponent', () => {
  let component: CovalentApiComponent;
  let fixture: ComponentFixture<CovalentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovalentApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovalentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
