import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuFotosPage } from './menu-fotos.page';

describe('MenuFotosPage', () => {
  let component: MenuFotosPage;
  let fixture: ComponentFixture<MenuFotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuFotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
