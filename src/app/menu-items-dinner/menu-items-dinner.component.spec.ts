import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsDinnerComponent } from './menu-items-dinner.component';

describe('MenuItemsDinnerComponent', () => {
  let component: MenuItemsDinnerComponent;
  let fixture: ComponentFixture<MenuItemsDinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsDinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsDinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
