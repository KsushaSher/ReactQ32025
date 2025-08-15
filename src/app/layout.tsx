import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'REACTQ32025',
  description: 'My App is a...',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // const cookieStore = await cookies();
  // const theme = cookieStore.get('theme');
  // const themeValue = theme?.value || 'light';

  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
        {/* <script type="module" src="/src/main.tsx"></script> */}
        {/* удалить */}
      </body>
    </html>
  );
};

export default RootLayout;
