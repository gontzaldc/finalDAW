import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformazioaPage } from './informazioa.page';

describe('InformazioaPage', () => {
  let component: InformazioaPage;
  let fixture: ComponentFixture<InformazioaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformazioaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformazioaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
