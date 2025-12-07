const Quest = ({ children }: any) => {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-col justify-between min-w-xs md:min-w-xl md:max-w-xl bg-white rounded-md relative p-4 overflow-hidden drop-shadow-[0_0_12px_#00eaff] opacity-90">
        {children}
      </div>
    </div>
  );
};

export default Quest;
