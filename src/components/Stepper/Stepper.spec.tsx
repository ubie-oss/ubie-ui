import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';
import { StepperItem } from './StepperItem';

describe('<Stepper>', () => {
  it('renders children correctly', () => {
    render(
      <Stepper data-testid="stepper">
        <StepperItem label="Step 1" />
        <StepperItem label="Step 2" />
        <StepperItem label="Step 3" />
      </Stepper>,
    );

    expect(screen.getByTestId('stepper')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('applies correct status based on currentStep', () => {
    render(
      <Stepper currentStep={1}>
        <StepperItem label="Step 1" data-testid="step-0" />
        <StepperItem label="Step 2" data-testid="step-1" />
        <StepperItem label="Step 3" data-testid="step-2" />
      </Stepper>,
    );

    const step0 = screen.getByTestId('step-0');
    const step1 = screen.getByTestId('step-1');
    const step2 = screen.getByTestId('step-2');

    // Step 0 should be done (index < currentStep)
    expect(step0.className).toMatch(/done/);
    // Step 1 should be current (index === currentStep)
    expect(step1.className).toMatch(/current/);
    // Step 2 should be undone (index > currentStep)
    expect(step2.className).toMatch(/undone/);
  });

  it('sets first and last child properties correctly', () => {
    render(
      <Stepper>
        <StepperItem label="First" data-testid="first" />
        <StepperItem label="Middle" data-testid="middle" />
        <StepperItem label="Last" data-testid="last" />
      </Stepper>,
    );

    const first = screen.getByTestId('first');
    const middle = screen.getByTestId('middle');
    const last = screen.getByTestId('last');

    // First item should hide left border
    const firstLeftBorder = first.querySelector('[class*="leftBorder"]');
    const firstRightBorder = first.querySelector('[class*="rightBorder"]');
    expect(firstLeftBorder?.className).toMatch(/hidden/);
    expect(firstRightBorder?.className).not.toMatch(/hidden/);

    // Middle item should show both borders
    const middleLeftBorder = middle.querySelector('[class*="leftBorder"]');
    const middleRightBorder = middle.querySelector('[class*="rightBorder"]');
    expect(middleLeftBorder?.className).not.toMatch(/hidden/);
    expect(middleRightBorder?.className).not.toMatch(/hidden/);

    // Last item should hide right border
    const lastLeftBorder = last.querySelector('[class*="leftBorder"]');
    const lastRightBorder = last.querySelector('[class*="rightBorder"]');
    expect(lastLeftBorder?.className).not.toMatch(/hidden/);
    expect(lastRightBorder?.className).toMatch(/hidden/);
  });

  it('has all margins through m prop', () => {
    render(
      <Stepper m="xxs" data-testid="stepper">
        <StepperItem label="Step 1" />
        <StepperItem label="Step 2" />
      </Stepper>,
    );
    const stepper = screen.getByTestId('stepper');

    expect(stepper).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('defaults to currentStep 0 when not specified', () => {
    render(
      <Stepper>
        <StepperItem label="Step 1" data-testid="step-0" />
        <StepperItem label="Step 2" data-testid="step-1" />
      </Stepper>,
    );

    const step0 = screen.getByTestId('step-0');
    const step1 = screen.getByTestId('step-1');

    expect(step0.className).toMatch(/current/);
    expect(step1.className).toMatch(/undone/);
  });
});

describe('<StepperItem>', () => {
  it('renders label correctly', () => {
    render(<StepperItem label="Test Step" />);
    expect(screen.getByText('Test Step')).toBeInTheDocument();
  });

  it('applies correct CSS classes based on status', () => {
    const { rerender } = render(<StepperItem label="Test" status="current" data-testid="item" />);

    expect(screen.getByTestId('item').className).toMatch(/current/);

    rerender(<StepperItem label="Test" status="done" data-testid="item" />);
    expect(screen.getByTestId('item').className).toMatch(/done/);

    rerender(<StepperItem label="Test" status="undone" data-testid="item" />);
    expect(screen.getByTestId('item').className).toMatch(/undone/);
  });

  it('uses custom icon when provided', () => {
    render(<StepperItem label="Test" icon="HomeOutlineIcon" status="current" data-testid="item" />);

    // Icon component should be rendered (we can't easily test the actual icon)
    const iconWrapper = screen.getByTestId('item').querySelector('[class*="iconWrapper"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  it('uses custom done icon when status is done', () => {
    render(<StepperItem label="Test" doneIcon="CheckAIcon" status="done" data-testid="item" />);

    const iconWrapper = screen.getByTestId('item').querySelector('[class*="iconWrapper"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  it('hides borders correctly for first and last items', () => {
    const { rerender } = render(<StepperItem label="Test" isFirst={true} data-testid="item" />);

    const leftBorder = screen.getByTestId('item').querySelector('[class*="leftBorder"]');
    const rightBorder = screen.getByTestId('item').querySelector('[class*="rightBorder"]');
    expect(leftBorder?.className).toMatch(/hidden/);
    expect(rightBorder?.className).not.toMatch(/hidden/);

    rerender(<StepperItem label="Test" isLast={true} data-testid="item" />);
    const leftBorder2 = screen.getByTestId('item').querySelector('[class*="leftBorder"]');
    const rightBorder2 = screen.getByTestId('item').querySelector('[class*="rightBorder"]');
    expect(leftBorder2?.className).not.toMatch(/hidden/);
    expect(rightBorder2?.className).toMatch(/hidden/);
  });
});
