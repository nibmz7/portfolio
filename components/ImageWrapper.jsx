export const ImageWrapper = ({ className = "", children }) => {
  return (
    <div className={`flex rounded shadow overflow-hidden ${className}`}>
      {children}
    </div>
  );
};
