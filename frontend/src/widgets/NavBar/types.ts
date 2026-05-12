export interface NavBarProps {
  links: { to: string; label: string }[];
  onLogout: () => void;
  logoutText: string;
}
