"use client";

interface BioProps {
  name?: string;
  alias?: string;
  description?: string;
  className?: string;
}

export default function Bio({
  name,
  alias,
  description,
  className = "",
}: BioProps) {
  return (
    <div className={className}>
      {name && <p className="font-semibold text-lg">{name}</p>}
      {alias && <p className="text-_lightGrayText -mt-1.5 text-md">@{alias}</p>}
      {description && <p className="text-sm leading-5 mt-1">{description}</p>}
    </div>
  );
}
