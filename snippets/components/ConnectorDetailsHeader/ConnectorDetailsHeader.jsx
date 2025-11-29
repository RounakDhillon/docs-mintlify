export const ConnectorDetailsHeader = ({
  name,
  stage,
  platform,
  availableFeatures,
  unavailableFeatures = [],
  availableFeaturesCollate = [],
}) => {
  const showSubHeading = availableFeatures?.length > 0 || unavailableFeatures?.length > 0 || availableFeaturesCollate?.length > 0;
  const totalAvailableFeatures = [
    ...(availableFeatures || []),
    ...(availableFeaturesCollate || [])
  ];

  return (
    <div className="container">
      <div className="Heading">
        <div className="flex items-center gap-3">
          <h1 className="ConnectorName">{name}</h1>
          <span className={`StageBadge ${stage === 'PROD' ? 'prod' : 'beta'}`}>
            {stage}
          </span>
        </div>
        <div className="PlatformDetails">
          <div>Available In:</div>
          <div className="PlatformName">
            {platform}
          </div>
        </div>
      </div>
      {showSubHeading && (
        <div className="SubHeading">
          <div className="FeaturesHeading">Feature List</div>
          <div className="FeaturesList">
            {totalAvailableFeatures.map((feature) => (
              <div
                className="FeatureTag AvailableFeature"
                key={feature}
              >
                ✓ {feature}
              </div>
            ))}
            {unavailableFeatures.map((feature) => (
              <div
                className="FeatureTag UnavailableFeature"
                key={feature}
              >
                ✕ {feature}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
