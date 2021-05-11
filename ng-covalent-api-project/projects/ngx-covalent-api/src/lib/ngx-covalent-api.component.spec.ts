import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCovalentApiComponent } from './ngx-covalent-api.component';

describe('NgxCovalentApiComponent', () => {
  let component: NgxCovalentApiComponent;
  let fixture: ComponentFixture<NgxCovalentApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCovalentApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCovalentApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
