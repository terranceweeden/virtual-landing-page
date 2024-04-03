import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-29 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold md-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resource, i) => (
              <li key={i} className="text-neutral-300 hover:text-white">
                <a href={resource.href}>{resource.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold md-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((platform, i) => (
              <li key={i} className="text-neutral-300 hover:text-white">
                <a href={platform.href}>{platform.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold md-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((Community, i) => (
              <li key={i} className="text-neutral-300 hover:text-white">
                <a href={Community.href}>{Community.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
