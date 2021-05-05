import { ButtonComponent } from './button.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { delay } from 'rxjs/operators';

describe('ButtonComponent', () => {

  let spectator: Spectator<ButtonComponent>;
  const createComponent = createComponentFactory(ButtonComponent);

  test('should have a success class by default', () => {
    spectator = createComponent();
    expect(spectator.query('button')).toHaveClass('success');
  });

  test('should set the class name according to the [className] input', () => {
    spectator = createComponent();
    spectator.setInput('className', 'danger');
    expect(spectator.query('button')).toHaveClass('danger');
    expect(spectator.query('button')).not.toHaveClass('success');
  });

  test('should set the title according to the title input', () => {
    spectator = createComponent();
    spectator.setInput('title', 'Titulo');
    expect(spectator.query('button')).toHaveTextContent('Titulo');
  });

  test('should set the title according to the title input', () => {
    spectator = createComponent({props: {title: 'Click'}});
    expect(spectator.query('button')).toHaveTextContent('Click');
  });

  test('should emit the $event on click', async (done) => {
    spectator = createComponent({});
    let output;
    spectator.output<{ type: string }>('click').subscribe((result) => {
      output = result;
      expect(output).toEqual({ type: 'click' });
      done();
    });
    spectator.component.onClick({ type: 'click' });
  });
});