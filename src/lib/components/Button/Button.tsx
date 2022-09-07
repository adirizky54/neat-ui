import cx from 'clsx';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { ComponentColor, ComponentRadius, ComponentSize, ComponentVariant } from '../../types';
import type { PositionInButtonGroup } from './ButtonGroup';

import ButtonGroup from './ButtonGroup';
import { Spinner } from '../Spinner';

import theme from '../../theme';
import { buttonStyle } from './Button.style';
import { buttonGroupStyle } from './ButtonGroup.style';

export type ButtonProps = {
  /** Button color from theme */
  color?: ComponentColor;

  /** Controls button appearance */
  variant?: ComponentVariant;

  /** Predefined button size */
  size?: ComponentSize;

  /** Adds icon before button label  */
  leftIcon?: JSX.Element;

  /** Adds icon after button label  */
  rightIcon?: JSX.Element;

  /** Sets button width to 100% of parent element */
  block?: boolean;

  /** Button border-radius */
  radius?: ComponentRadius;

  /** Set text-transform to uppercase */
  uppercase?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Indicate loading state */
  loading?: boolean;

  /** Button additional class */
  className?: string;

  /** Position button in Group.Button */
  positionInGroup?: keyof PositionInButtonGroup;
} & PropsWithChildren<ComponentProps<'button'>>

const ButtonComponent: FC<ButtonProps> = ({
  type = "button",
  color = "primary",
  variant = "filled",
  size = "md",
  radius = "md",
  leftIcon = null,
  rightIcon = null,
  uppercase = false,
  block = false,
  disabled = false,
  loading = false,
  positionInGroup = 'none',
  className,
  children,
}): JSX.Element => {
  const { base } = theme;
  const { button } = buttonStyle;
  const { buttonGroup } = buttonGroupStyle;

  return (
    <button
      className={cx(
        button.base,
        button.variant[variant as keyof typeof button.variant][color as keyof typeof button.variant.filled],
        button.size[size as keyof typeof button.size],
        base.borderRadius[radius as keyof typeof base.borderRadius],
        buttonGroup.position[positionInGroup as keyof typeof buttonGroup.position],
        {
          [button.disabled]: disabled || loading,
          "uppercase tracking-wider": uppercase,
          "w-full": block
        },
        className,
      )}
      type={type}
      disabled={disabled || loading}
    >
      {(leftIcon || loading) && (
        <span className="h-4 w-4 -ml-1 mr-2">
          {loading ? <Spinner size="xs" /> : leftIcon}
        </span>
      )}
      <span>{children}</span>
      {(rightIcon && loading === false) && (
        <span className="h-4 w-4 ml-2 -mr-1">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
