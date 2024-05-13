"use client";

interface BioProps {
  name?: string;
  alias?: string;
  description?: string;
}

export default function Bio({ name, alias, description }: BioProps) {
  return (
    <div className="mt-11 mx-8">
      {name && <p className="font-semibold text-lg">{name}</p>}
      {alias && <p className="text-_lightGrayText -mt-1 text-md">@{alias}</p>}
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
}
