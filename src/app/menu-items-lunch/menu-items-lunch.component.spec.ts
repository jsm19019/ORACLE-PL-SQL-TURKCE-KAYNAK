import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsLunchComponent } from './menu-items-lunch.component';

describe('MenuItemsLunchComponent', () => {
  let component: MenuItemsLunchComponent;
  let fixture: ComponentFixture<MenuItemsLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsLunchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
