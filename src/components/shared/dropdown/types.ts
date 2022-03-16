export type TDropdownProps = {
  id: string;
  text: string;
  menuItems: TDropdownMenuItemProps[];
};

export type TDropdownMenuProps = {
  id: string;
  show: boolean;
  closeFn: () => void;
};

type TCommonDropdownMenuItemProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

export type TDropdownMenuItemProps = TCommonDropdownMenuItemProps &
  (
    | {
        type: 'link';
        href: string;
      }
    | {
        type: 'button';
        href?: never;
      }
  );
