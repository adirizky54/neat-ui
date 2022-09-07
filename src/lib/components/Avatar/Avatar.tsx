import cx from "clsx";

import { ComponentProps, FC, PropsWithChildren } from "react";
import { ComponentColor, ComponentRadius, ComponentSize } from "../../types";

import theme from "../../theme";
import { avatarStyle } from "./Avatar.style";

export type AvatarVariant = 'filled' | 'light';

export type AvatarProps = {
  /** Image url */
  src?: string | null;

  /** Image alt text or title for placeholder variant */
  alt?: string | undefined;

  /** Icon to be used in avatar */
  icon?: React.ReactNode;

  /** Avatar width and height */
  size?: ComponentSize;

  /** Value from theme.radius or number to set border-radius in px */
  radius?: ComponentRadius;

  /** Controls avatar appearance */
  variant?: AvatarVariant;

  /** Color from theme.colors used for letter and icon placeholders */
  color?: ComponentColor;
} & PropsWithChildren<ComponentProps<'span'>>

const AvatarComponent: FC<AvatarProps> = ({
  src = null,
  alt = undefined,
  icon = null,
  size = "md",
  radius = "lg",
  variant = "filled",
  color = "default",
  children,
}): JSX.Element => {
  const { base } = theme;
  const { avatar } = avatarStyle;

  return (
    <span className="inline-block relative">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cx(avatar.size[size], base.borderRadius[radius])}
        />
      ) : (
        <span
          className={cx(
            avatar.base,
            avatar[variant][color],
            avatar.size[size],
            base.borderRadius[radius],
          )}
        >
          {icon ? (
            <span className={cx(avatar.iconSize[size])}>{icon}</span>
          ) : (
            children
          )}
        </span>
      )}
    </span>
  );
};

AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {});
