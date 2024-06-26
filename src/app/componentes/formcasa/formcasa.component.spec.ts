import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcasaComponent } from './formcasa.component';

describe('FormcasaComponent', () => {
  let component: FormcasaComponent;
  let fixture: ComponentFixture<FormcasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormcasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormcasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
