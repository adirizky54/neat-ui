import type { ComponentPropsWithoutRef, FC } from "react";
import type { ComponentColor, ComponentSize } from "../../types";

import { Oval } from "./loaders/Oval";

const sizes = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export type SpinnerProps = {
  /** Defines width of Spinner */
  size: ComponentSize;

  /** Spinner color from theme */
  color?: ComponentColor;
} & ComponentPropsWithoutRef<'svg'>

export const Spinner: FC<SpinnerProps> = ({ size = 'md' }): JSX.Element => {
  return (
    <Oval size={sizes[size]} />
  );
};
