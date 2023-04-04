import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsDetailPageComponent } from './contents-detail-page.component';

describe('ContentsDetailPageComponent', () => {
  let component: ContentsDetailPageComponent;
  let fixture: ComponentFixture<ContentsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
