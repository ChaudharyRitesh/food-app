export type NavbarProps = {
  items: NavItemProps[];
};

export type NavItemProps = {
  active?: boolean;
  href: string;
  text: string;
};
