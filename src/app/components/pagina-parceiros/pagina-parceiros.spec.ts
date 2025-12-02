import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaParceiros } from './pagina-parceiros';

describe('PaginaParceiros', () => {
  let component: PaginaParceiros;
  let fixture: ComponentFixture<PaginaParceiros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaParceiros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaParceiros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
