const ShineLogo = ({ className = "w-32" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="100"
          y="120"
          fontSize="120"
          textAnchor="middle"
          className="fill-warm-dark"
        >
          💛
        </text>
        <text
          x="100"
          y="170"
          fontSize="32"
          textAnchor="middle"
          className="fill-warm-darker font-bold"
          fontFamily="Arial, sans-serif"
        >
          SHINE
        </text>
      </svg>
    </div>
  );
};

export default ShineLogo;

