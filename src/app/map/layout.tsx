import { type ReactNode } from "react";
import Nav from "~/components/Nav";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div>
      {/* Logged In Header */}
      <Nav />
      {children}
    </div>
  );
}
