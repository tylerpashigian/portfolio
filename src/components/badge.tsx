interface Props {
  children: React.ReactNode;
}

const Badge = ({ children }: Props) => {
  return (
    <div className="px-2 py-1 rounded-full bg-secondary text-xs text-primary-foreground font-medium border border-secondary-foreground">
      {children}
    </div>
  );
};

export default Badge;
