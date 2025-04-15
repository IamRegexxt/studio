# **App Name**: InsightFlow Dashboard

## Core Features:

- Key Metrics Overview: Display total users, predictions, and feedback in prominent cards.
- Disease Distribution Chart: Visualize disease prediction distribution using a pie or bar chart.
- Prediction Trends: Show prediction trends over the last 30 days via a line or bar chart.
- Confidence Level Analysis: Present confidence score distribution in a grouped bar chart.
- Feedback Insights: Visualize user feedback ratings using a bar or donut chart, and calculate average accuracy per disease.

## Style Guidelines:

- Primary color: Dark blue (#2d3748) for a professional and calming feel.
- Secondary color: Light gray (#edf2f7) for backgrounds and subtle contrasts.
- Accent: Teal (#319795) for interactive elements and highlights.
- Clean and modern typography for readability and data presentation.
- Responsive grid layout to adapt to different screen sizes.
- Use a consistent set of data visualization icons.
- Subtle transitions and animations for a smooth user experience.

## Original User Request:
✅ 1. Summary Analytics 
This endpoint provides an overview of general activity.
Frontend Widgets/Charts You Can Build:
•	📊 Total Users – Show total number of users.
•	📊 Total Predictions – Total predictions made by users.
•	📊 Total Feedback – Total feedback submitted.
•	⭐ Average Rating – Average user rating of prediction accuracy.
•	🧬 Disease Distribution – Pie or bar chart showing how many predictions for each disease (excluding "Processing").
•	📈 Recent Predictions (last 7 days) – Number of predictions made in the last week.
________________________________________
✅ 2. Prediction Analytics 
This endpoint dives deeper into prediction trends.
Frontend Widgets/Charts You Can Build:
•	📅 Predictions Over Time (last 30 days) – Line or bar chart of predictions per day.
•	🧠 Confidence Score Distribution – Bar chart grouped by confidence levels:
o	0–20%
o	20–40%
o	40–60%
o	60–80%
o	80–100%
________________________________________
✅ 3. Feedback Analytics
This endpoint focuses on user feedback details.
Frontend Widgets/Charts You Can Build:
•	🌟 Rating Distribution – Number of feedbacks for each star rating (1–5 stars), e.g. bar chart or donut chart.
•	🦠 Average Accuracy Rating per Disease – Grouped bar chart showing how accurate predictions were for each disease based on user feedback.
________________________________________
💡 Suggested Layout for Dashboard UI
Here’s a rough layout idea for your frontend:
🔹 Top Stats (Cards)
•	Total Users
•	Total Predictions
•	Total Feedback
•	Average Accuracy Rating
🔹 Charts Section
•	Disease Distribution (Pie or Bar)
•	Predictions Over Time (Line chart for last 30 days)
•	Confidence Score Distribution (Bar chart)
🔹 Feedback Section
•	Rating Distribution (Bar/Donut)
•	Avg. Rating by Disease (Grouped Bar chart)

make a professional responsive dashboard using react js + vite apply tailwind or other
  