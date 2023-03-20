import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemsStartersComponent } from './menu-items-starters.component';

describe('MenuItemsStartersComponent', () => {
  let component: MenuItemsStartersComponent;
  let fixture: ComponentFixture<MenuItemsStartersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemsStartersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemsStartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
