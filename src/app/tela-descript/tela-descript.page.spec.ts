import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DescriptPage } from './tela-descript.page';

describe('TelaDescriptPage', () => {
  let component: DescriptPage;
  let fixture: ComponentFixture<DescriptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
