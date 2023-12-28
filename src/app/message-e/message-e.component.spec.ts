import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageEComponent } from './message-e.component';

describe('MessageEComponent', () => {
  let component: MessageEComponent;
  let fixture: ComponentFixture<MessageEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
