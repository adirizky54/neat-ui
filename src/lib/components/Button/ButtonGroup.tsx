import { Children, cloneElement, useMemo } from 'react';

import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import type { ButtonProps } from '.';

import { buttonGroupStyle } from './ButtonGroup.style';

export type ButtonGroupProps = PropsWithChildren<ComponentProps<'div'>>

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

const ButtonGroup: FC<ButtonGroupProps> = ({ children }): JSX.Element => {
  const { buttonGroup } = buttonGroupStyle;

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          positionInGroup:
            index === 0 ? 'start' : index === (children as ReactElement<ButtonProps>[]).length - 1 ? 'end' : 'middle',
        }),
      ),
    [children],
  );

  return (
    <div className={buttonGroup.base} role="group">
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
