export const metadata = {
  title: "Payvia Lightsfest Demo",
  description: "Payvia powered by Deets demo for Lightsfest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
