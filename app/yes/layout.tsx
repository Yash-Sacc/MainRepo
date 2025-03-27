import { Metadata } from "next";

export const metadata: Metadata = {
  title: "I Love You Too! ❤️",
  description: "Thank you for saying yes!",
};

export default function YesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
} 