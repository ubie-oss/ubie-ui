import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';
import { StepperItem } from './StepperItem';

describe('<Stepper>', () => {
  it('renders steps correctly', () => {
    render(<Stepper data-testid="stepper" steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]} />);

    expect(screen.getByTestId('stepper')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('applies correct status based on currentStep', () => {
    render(<Stepper currentStep={1} steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]} />);

    const step0 = screen.getByText('Step 1').closest('[class*="stepperItem"]');
    const step1 = screen.getByText('Step 2').closest('[class*="stepperItem"]');
    const step2 = screen.getByText('Step 3').closest('[class*="stepperItem"]');

    // Step 0 should be done (index < currentStep)
    expect(step0?.className).toMatch(/done/);
    // Step 1 should be current (index === currentStep)
    expect(step1?.className).toMatch(/current/);
    // Step 2 should be undone (index > currentStep)
    expect(step2?.className).toMatch(/undone/);
  });

  it('sets first and last child properties correctly', () => {
    render(<Stepper steps={[{ label: 'First' }, { label: 'Middle' }, { label: 'Last' }]} />);

    const first = screen.getByText('First').closest('[class*="stepperItem"]');
    const middle = screen.getByText('Middle').closest('[class*="stepperItem"]');
    const last = screen.getByText('Last').closest('[class*="stepperItem"]');

    // First item should hide left border line
    const firstLeftBorderLine = first?.querySelector('[class*="leftBorder"] [class*="border"]');
    const firstRightBorderLine = first?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(firstLeftBorderLine?.className).toMatch(/hidden/);
    expect(firstRightBorderLine?.className).not.toMatch(/hidden/);

    // Middle item should show both border lines
    const middleLeftBorderLine = middle?.querySelector('[class*="leftBorder"] [class*="border"]');
    const middleRightBorderLine = middle?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(middleLeftBorderLine?.className).not.toMatch(/hidden/);
    expect(middleRightBorderLine?.className).not.toMatch(/hidden/);

    // Last item should hide right border line
    const lastLeftBorderLine = last?.querySelector('[class*="leftBorder"] [class*="border"]');
    const lastRightBorderLine = last?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(lastLeftBorderLine?.className).not.toMatch(/hidden/);
    expect(lastRightBorderLine?.className).toMatch(/hidden/);
  });

  it('has all margins through m prop', () => {
    render(<Stepper m="xxs" data-testid="stepper" steps={[{ label: 'Step 1' }, { label: 'Step 2' }]} />);
    const stepper = screen.getByTestId('stepper');

    expect(stepper).toHaveStyle('--margin-top: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-right: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-bottom: var(--size-spacing-xxs)');
    expect(stepper).toHaveStyle('--margin-left: var(--size-spacing-xxs)');
  });

  it('defaults to currentStep 0 when not specified', () => {
    render(<Stepper steps={[{ label: 'Step 1' }, { label: 'Step 2' }]} />);

    const step0 = screen.getByText('Step 1').closest('[class*="stepperItem"]');
    const step1 = screen.getByText('Step 2').closest('[class*="stepperItem"]');

    expect(step0?.className).toMatch(/current/);
    expect(step1?.className).toMatch(/undone/);
  });

  it('applies correct border line colors based on step position', () => {
    render(<Stepper currentStep={1} steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]} />);

    const step0 = screen.getByText('Step 1').closest('[class*="stepperItem"]');
    const step1 = screen.getByText('Step 2').closest('[class*="stepperItem"]');
    const step2 = screen.getByText('Step 3').closest('[class*="stepperItem"]');

    // Step 0 (done): both borders should be blue (left and right of current step)
    const step0RightBorder = step0?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(step0RightBorder?.className).toMatch(/borderColorBlue/);

    // Step 1 (current): left border blue, right border gray
    const step1LeftBorder = step1?.querySelector('[class*="leftBorder"] [class*="border"]');
    const step1RightBorder = step1?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(step1LeftBorder?.className).toMatch(/borderColorBlue/);
    expect(step1RightBorder?.className).toMatch(/borderColorGray/);

    // Step 2 (undone): left border gray
    const step2LeftBorder = step2?.querySelector('[class*="leftBorder"] [class*="border"]');
    expect(step2LeftBorder?.className).toMatch(/borderColorGray/);
  });

  it('applies gray border color for lines to the right of current step', () => {
    render(<Stepper currentStep={0} steps={[{ label: 'Step 1' }, { label: 'Step 2' }]} />);

    const step0 = screen.getByText('Step 1').closest('[class*="stepperItem"]');
    const step1 = screen.getByText('Step 2').closest('[class*="stepperItem"]');

    // Step 0 (current): right border should be gray
    const step0RightBorder = step0?.querySelector('[class*="rightBorder"] [class*="border"]');
    expect(step0RightBorder?.className).toMatch(/borderColorGray/);

    // Step 1 (undone): left border should be gray
    const step1LeftBorder = step1?.querySelector('[class*="leftBorder"] [class*="border"]');
    expect(step1LeftBorder?.className).toMatch(/borderColorGray/);
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

  it('renders custom icons when provided in steps', () => {
    render(<Stepper currentStep={0} steps={[{ label: 'Home', icon: 'HomeOutlineIcon' }, { label: 'Settings' }]} />);

    // Icon component should be rendered for the first step
    const step0 = screen.getByText('Home').closest('[class*="stepperItem"]');
    const iconWrapper = step0?.querySelector('[class*="iconWrapper"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  it('uses custom done icon when step is completed', () => {
    render(
      <Stepper currentStep={1} steps={[{ label: 'Done Step', doneIcon: 'CheckAIcon' }, { label: 'Current Step' }]} />,
    );

    const step0 = screen.getByText('Done Step').closest('[class*="stepperItem"]');
    const iconWrapper = step0?.querySelector('[class*="iconWrapper"]');
    expect(iconWrapper).toBeInTheDocument();
  });

  it('hides borders correctly for first and last items', () => {
    const { rerender } = render(<StepperItem label="Test" isFirst={true} data-testid="item" />);

    const leftBorderLine = screen.getByTestId('item').querySelector('[class*="leftBorder"] [class*="border"]');
    const rightBorderLine = screen.getByTestId('item').querySelector('[class*="rightBorder"] [class*="border"]');
    expect(leftBorderLine?.className).toMatch(/hidden/);
    expect(rightBorderLine?.className).not.toMatch(/hidden/);

    rerender(<StepperItem label="Test" isLast={true} data-testid="item" />);
    const leftBorderLine2 = screen.getByTestId('item').querySelector('[class*="leftBorder"] [class*="border"]');
    const rightBorderLine2 = screen.getByTestId('item').querySelector('[class*="rightBorder"] [class*="border"]');
    expect(leftBorderLine2?.className).not.toMatch(/hidden/);
    expect(rightBorderLine2?.className).toMatch(/hidden/);
  });
});
