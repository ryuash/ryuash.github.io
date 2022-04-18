import {
  LinkedInIcon,
  GithubIcon,
  ExternalIcon,
} from '@src/components/icons';

/**
 * Helper to display the correct social icon based on the type given.
 * Defaults to external link if no type matches
 * @param type
 * @returns
 */
export const renderIconByType = (type: string) => {
  switch (type) {
    case 'github': {
      return <GithubIcon />;
    }
    case 'linkedIn': {
      return <LinkedInIcon />;
    }
    case 'external': {
      return <ExternalIcon />;
    }
    default:
      return <ExternalIcon />;
  }
};
