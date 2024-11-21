interface GridLayoutProps {
    children: React.ReactNode;
    columns?: number; // Default is 3
  }
  
  const GridLayout: React.FC<GridLayoutProps> = ({ children, columns = 3 }) => {
    return <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>{children}</div>;
  };
  
  export default GridLayout;