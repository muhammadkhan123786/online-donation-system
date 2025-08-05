const Button: React.FC<{ children: React.ReactNode; cssClasses: string }> = ({
  children,
  cssClasses,
}) => {
  return <button className={cssClasses}>{children}</button>;
};
export default Button;
