type NavModel = {
  id: number;
  url: string;
  name?: string;
};

type socialNetworksType = {
  id: number;
  img: string;
  url: string;
};

type contactInfoProps = {
  id: number;
  icon: React.ElementType;
  description: string;
};

export type { NavModel, socialNetworksType, contactInfoProps };
