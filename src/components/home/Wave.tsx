interface WaveProps {
  classname: string;
  color: string | "red";
  style: "1" | "2" | "3";
}

export default function Wave({ classname, color, style }: WaveProps) {
  function getD() {
    if (style === "1")
      return "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z";
    else if (style === "2")
      return "M0,96L48,80C96,64,192,32,288,21.3C384,11,480,21,576,74.7C672,128,768,224,864,229.3C960,235,1056,149,1152,138.7C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
    else if (style === "3")
      return "M0,160L48,154.7C96,149,192,139,288,122.7C384,107,480,85,576,69.3C672,53,768,43,864,58.7C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
  }
  function getViewBox() {
    if (style === "1") return "0 0 1200 120";
    else if (style === "2") return "0 0 1440 320";
    else if (style === "3") return "0 0 1440 320";
    return "";
  }
  return (
    <svg className={`relative block ${classname}`} viewBox={getViewBox()} preserveAspectRatio="none">
      {color !== "red" ? (
        <path className="shape-fill" fill={color} d={getD()}></path>
      ) : (
        <path className="shape-fill dark: fill-_lightBgRed dark:fill-_darkBgRed" d={getD()}></path>
      )}
    </svg>
  );
}
