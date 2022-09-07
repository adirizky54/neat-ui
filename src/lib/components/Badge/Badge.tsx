import cx from "clsx";

import { ComponentProps, FC, PropsWithChildren } from "react";
import { ComponentColor } from "../../types";

import { badgeStyle } from "./Badge.style";

export type BadgeProps = {
  /** Color from theme.colors used for letter and icon placeholders */
  color?: ComponentColor;

  /** Adds icon before button label  */
  leftIcon?: JSX.Element;

  /** Adds icon after button label  */
  rightIcon?: JSX.Element;
} & PropsWithChildren<ComponentProps<'span'>>

export const Badge: FC<BadgeProps> = ({
  color = "default",
  leftIcon = null,
  rightIcon = null,
  children,
}): JSX.Element => {
  const { badge } = badgeStyle;

  return (
    <span
      className={cx(
        badge.base,
        badge.color[color as keyof typeof badge.color],
      )}
    >
      {leftIcon && (
        <span className="-ml-1 mr-1 w-4 h-4">
          {leftIcon}
        </span>
      )}
      <span>{children}</span>
      {rightIcon && (
        <span className="ml-1 -mr-1 w-4 h-4">
          {rightIcon}
        </span>
      )}
    </span>
  );
};
