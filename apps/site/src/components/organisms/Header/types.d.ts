export interface HeaderItemsProps {
    href: string;
    label: string;
  }
  
  export interface StyledHeaderProps {
    isHighlighted?: boolean;
  }
  
  export interface HeaderProps extends StyledHeaderProps {
    items: HeaderItemsProps[];
  }
  