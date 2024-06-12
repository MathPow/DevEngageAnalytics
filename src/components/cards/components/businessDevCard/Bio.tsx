interface BioProps {
  name?: string;
  alias: string;
  bio?: string;
  className?: string;
}

export default function Bio({ name, alias, bio, className = "" }: BioProps) {
  return (
    <div className={className}>
      {name ? (
        <>
          <p className="text-_white text-xl font-semibold text-black dark:text-white">{name}</p>
          <p className="-mt-1 mb-2 text-_darkGrayText dark:text-_lightGrayText">@{alias}</p>
        </>
      ) : (
        <p className="mb-4 text-lg text-black dark:text-white">{alias}</p>
      )}
      {bio && <p className="line-clamp-3 leading-5 text-_darkGrayText dark:text-_lightGrayText">{bio}</p>}
    </div>
  );
}
