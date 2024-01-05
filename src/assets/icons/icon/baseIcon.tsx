import { FC } from 'react';
import { boolAttr } from 'helpers';
import styles from './baseIcon.module.scss';
import classNames from 'classnames';

const sizes: {
  [key: string]: number;
} = {
  nano: 14,
  xxs: 18,
  xs: 20,
  sm: 24,
  md: 36,
  lg: 48,
  xl: 60,
  xxl: 76,
};

interface BaseIconProps {
  role?: string;
  'aria-label'?: string;
  size?: string;
  color?: string;
  className?: string;
  children?: any;
  viewBox?: string;
  background?: string;
  active?: boolean;
  dataHover?: boolean;
  disabled?: boolean;
  direction?: string;
  reflect?: string;
  toggle?: string;
  props?: any;
  fill?: string;
  stroke?: string;
}

export const BaseIcon: FC<BaseIconProps> = ({
  role = 'img',
  'aria-label': label,
  size = 'xs',
  color = 'rgb(76, 83, 91)',
  className,
  children,
  viewBox = '0 0 24 24',
  background = 'transparent',
  active,
  dataHover,
  disabled,
  //   /** [IGNORED]: For interoperability between icons */
  direction, // eslint-disable-line
  reflect, // eslint-disable-line
  toggle, // eslint-disable-line
  fill,
  stroke,
}) => {
  return (
    <span
      className={classNames(styles.shapeCss, className)}
      // @ts-ignore
      style={{ '---svg-background': background }}
      data-size={size}
      data-active={active}
      data-hover={dataHover}
      data-disabled={disabled}
      data-background={boolAttr(background !== 'transparent')}
    >
      <svg
        // @ts-ignore
        style={{ color, '--pathColor': color }}
        role={role}
        aria-label={label}
        viewBox={viewBox}
        width={sizes[size]}
        height={sizes[size]}
        data-direction={direction}
        data-reflect={reflect}
        data-toggle={toggle}
        // fill={`${active ? "transparent" : "transparent"}`}
        className={classNames(
          styles.reflectCss,
          styles.directionCss,
          styles.svgCss,
          className
        )}
        fill={fill}
        stroke={stroke}
      >
        {children}
      </svg>
    </span>
  );
};
