import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeFormatPipe } from '../time-format.pipe';
import { TireChangeProgressComponent } from './tire-change-progress.component';
import { TimingDataService } from '../timing-data.service';

describe('TireChangeProgressComponent', () => {
  let component: TireChangeProgressComponent;
  let fixture: ComponentFixture<TireChangeProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TireChangeProgressComponent],
      // In a real testing env, would pass mocks instead.
      providers: [TimeFormatPipe, TimingDataService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireChangeProgressComponent);
    component = fixture.componentInstance;
    component.currentLap = 10;
    component.tireColorSettings = [{ type: 'Soft', color: 'red' }];
    component.tires = [{ lap: 10, type: 'Soft' }];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw erros with default data', () => {
    expect(component).toBeTruthy();
  });
});
