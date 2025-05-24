import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="https://avatars.githubusercontent.com/u/185675318" width="22" height="22" alt='' />
        VulpesCloud Docs
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
};
