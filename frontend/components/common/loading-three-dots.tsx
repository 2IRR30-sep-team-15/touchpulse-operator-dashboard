const LoadingThreeDots = () => {
  return (
    <span className="h-[1em] w-[1em] flex flex-row">
      <span className="animate-bounce [animation-delay:-0.3s]">.</span>
      <span className="animate-bounce [animation-delay:-0.15s]">.</span>
      <span className="animate-bounce">.</span>
    </span>
  );
};

export default LoadingThreeDots;
