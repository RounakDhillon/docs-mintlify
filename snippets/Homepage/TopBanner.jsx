export const TopBanner = () => {
  return (
    <div className="banner-container">
      <div className="video-iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vAwEIOqqaXw?si=4DaceR1QNIvFn-Pc"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <a href="/quick-start" className="banner-heading">
          How to guides
        </a>
        <div className="banner-description">
          Get a complete overview of the features in Collate from our How-to
          Guides. The How-to Guides will give you a walk through on
          accomplishing the basic to the most advanced things in Collate. These
          step-by-step guides will help get an overview of the features and also
          help explore the various functionalities.
        </div>
        <div className="tab-container">
          <div className="tabs">
            <img src="/images/header-tabs/discovery.svg" alt="Discovery Icon" className="banner-icon" />
            <span>Discovery</span>
          </div>
          <div className="tabs">
            <img src="/images/header-tabs/collaboration.svg" alt="Collaboration Icon" className="banner-icon" />
            <span>Collaboration</span>
          </div>
          <div className="tabs">
            <img src="/images/header-tabs/observability.svg" alt="Observability Icon" className="banner-icon" />
            <span>Observability</span>
          </div>
          <div className="tabs">
            <img src="/images/header-tabs/lineage.svg" alt="Lineage Icon" className="banner-icon" />
            <span>Lineage</span>
          </div>
          <div className="tabs">
            <img src="/images/header-tabs/data-insights.svg" alt="Insights Icon" className="banner-icon" />
            <span>Insights</span>
          </div>
          <div className="tabs">
            <img src="/images/header-tabs/governance.svg" alt="Governance Icon" className="banner-icon" />
            <span>Governance</span>
          </div>
        </div>
      </div>
    </div>
  );
};
