import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPontos } from './pagina-pontos';

describe('PaginaPontos', () => {
  let component: PaginaPontos;
  let fixture: ComponentFixture<PaginaPontos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPontos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPontos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
