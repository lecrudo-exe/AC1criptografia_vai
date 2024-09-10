import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaDescriptPage } from './tela-descript.page';

describe('TelaDescriptPage', () => {
  let component: TelaDescriptPage;
  let fixture: ComponentFixture<TelaDescriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaDescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
