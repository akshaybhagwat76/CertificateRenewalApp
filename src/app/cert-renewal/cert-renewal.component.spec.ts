import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertRenewalComponent } from './cert-renewal.component';

describe('CertRenewalComponent', () => {
  let component: CertRenewalComponent;
  let fixture: ComponentFixture<CertRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
