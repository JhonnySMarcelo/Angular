import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretiveNgforComponent } from './diretive-ngfor.component';

describe('DiretiveNgforComponent', () => {
  let component: DiretiveNgforComponent;
  let fixture: ComponentFixture<DiretiveNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretiveNgforComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretiveNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
