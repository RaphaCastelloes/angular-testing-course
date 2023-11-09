import { TestBed } from '@angular/core/testing';
import { CalculatorService } from "./calculator.service";
import { LoggerService } from './logger.service';

describe('CalculatorService', () => {

    let calculator: CalculatorService;
    let loggerSpy: any;

    // Setup
    beforeEach(() => {

        // Mock
        loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

        // TestBed
        TestBed.configureTestingModule(
            {
                providers: [
                    CalculatorService,
                    { provide: LoggerService, useValue: loggerSpy }
                ]
            });

        // 
        calculator = TestBed.inject(CalculatorService);
    });

    it('should add two numbers', () => {
        const result = calculator.add(2, 2);

        expect(result).toBe(4);

        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it('should subtract two numbers', () => {
        const logger = jasmine.createSpyObj('LoggerService', ['log']);

        const calculator = new CalculatorService(logger);

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtract result");

        expect(logger.log).toHaveBeenCalledTimes(1);
    });
});