import React from "react";
import AchievementsOverview from "./AchievementsOverview";
import AwardCard from "./AwardCard";
import MilestoneTimeline from "./MilestoneTimeline";

const AchievementsPage = () => {
  return (
    <div className="container">
      <AchievementsOverview />
      <AwardCard />

      <MilestoneTimeline />
    </div>
  );
};

export default AchievementsPage;
