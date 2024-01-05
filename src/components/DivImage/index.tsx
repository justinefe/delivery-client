interface Props {
  className: string;
  src?: string;
  children?: any;
  onClick?: () => void;
  backgroundColor?: string;
}

const DivImage = ({
  src,
  className,
  children,
  onClick,
  backgroundColor,
}: Props) => {
  const styleObj = src
    ? {
        style: {
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          // ...(style || {}),
          // no-repeat
        },
      }
    : {
        // ...(style || {}),
      };

  const compStyle = {
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(styleObj.style || {}),
  };

  return (
    <div style={compStyle} onClick={onClick} className={className}>
      {children}
    </div>
  );
};

export default DivImage;
