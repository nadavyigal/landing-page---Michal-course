import logoImage from "@/assets/logo.png";

const ShineLogo = ({ className = "w-32" }: { className?: string }) => {
  return (
    <img
      src={logoImage}
      alt="SHINE - מיכל סלונים"
      className={className}
    />
  );
};

export default ShineLogo;
