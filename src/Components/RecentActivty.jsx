import React from "react";
import "./RecentActivity.css";
import ReviewCard from "./ReviewCard";

const RecentActivty = () => {
  const content =
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.";
  const events = [
    {
      name: "Event one...",
      rating: 3.4,
      content,
    },
    { name: "Event two...", rating: 1.7, content },
    { name: "Event three...", rating: 4.5, content },
  ];

  return (
    <div className='container'>
      <h1 className='recent-activity-title'>Recent Activity</h1>
      <h4>Subline Descriptive Text</h4>
      <div className='cards'>
        {events.map((event, i) => (
          <ReviewCard
            key={i}
            name={event.name}
            rating={event.rating}
            content={event.content}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentActivty;
