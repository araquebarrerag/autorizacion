import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorizadorComponentComponent } from './cuenta-component.component';

describe('AutorizadorComponentComponent', () => {
  let component: AutorizadorComponentComponent;
  let fixture: ComponentFixture<AutorizadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutorizadorComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutorizadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
