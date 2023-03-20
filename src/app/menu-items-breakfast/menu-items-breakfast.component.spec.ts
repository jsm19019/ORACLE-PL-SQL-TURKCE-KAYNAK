import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsBreakfastComponent } from './menu-items-breakfast.component';

describe('MenuItemsBreakfastComponent', () => {
  let component: MenuItemsBreakfastComponent;
  let fixture: ComponentFixture<MenuItemsBreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsBreakfastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsBreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
