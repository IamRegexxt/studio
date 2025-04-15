"use client";

import {
  AverageAccuracyRatingPerDisease,
  ConfidenceScoreDistribution,
  DiseaseDistribution,
  PredictionTrends,
  RatingDistribution,
  SummaryAnalytics,
  getAverageAccuracyRatingPerDisease,
  getConfidenceScoreDistribution,
  getDiseaseDistribution,
  getPredictionTrends,
  getRatingDistribution,
  getSummaryAnalytics,
} from "@/services/analytics";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

const LoadingCard = () => (
  <Card className="h-32">
    <CardHeader>
      <CardTitle><Skeleton className="h-6 w-40"/></CardTitle>
      <CardDescription><Skeleton className="h-4 w-24"/></CardDescription>
    </CardHeader>
    <CardContent>
      <Skeleton className="h-8 w-full"/>
    </CardContent>
  </Card>
);

const LoadingChart = () => (
  <Card className="h-64">
    <CardHeader>
      <CardTitle><Skeleton className="h-6 w-40"/></CardTitle>
      <CardDescription><Skeleton className="h-4 w-24"/></CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center">
      <Skeleton className="h-48 w-full"/>
    </CardContent>
  </Card>
);

export default function Home() {
  const [summaryAnalytics, setSummaryAnalytics] = useState<SummaryAnalytics | null>(null);
  const [diseaseDistribution, setDiseaseDistribution] = useState<DiseaseDistribution[] | null>(null);
  const [predictionTrends, setPredictionTrends] = useState<PredictionTrends[] | null>(null);
  const [confidenceScoreDistribution, setConfidenceScoreDistribution] =
    useState<ConfidenceScoreDistribution[] | null>(null);
  const [ratingDistribution, setRatingDistribution] = useState<RatingDistribution[] | null>(null);
  const [averageAccuracyRatingPerDisease, setAverageAccuracyRatingPerDisease] =
    useState<AverageAccuracyRatingPerDisease[] | null>(null);

  useEffect(() => {
    getSummaryAnalytics().then(setSummaryAnalytics);
    getDiseaseDistribution().then(setDiseaseDistribution);
    getPredictionTrends().then(setPredictionTrends);
    getConfidenceScoreDistribution().then(setConfidenceScoreDistribution);
    getRatingDistribution().then(setRatingDistribution);
    getAverageAccuracyRatingPerDisease().then(setAverageAccuracyRatingPerDisease);
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">InsightFlow Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryAnalytics ? (
          <>
            <Card className="h-32">
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>All time users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summaryAnalytics.totalUsers}</div>
              </CardContent>
            </Card>

            <Card className="h-32">
              <CardHeader>
                <CardTitle>Total Predictions</CardTitle>
                <CardDescription>Predictions made by users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summaryAnalytics.totalPredictions}</div>
              </CardContent>
            </Card>

            <Card className="h-32">
              <CardHeader>
                <CardTitle>Total Feedback</CardTitle>
                <CardDescription>Feedback submitted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summaryAnalytics.totalFeedback}</div>
              </CardContent>
            </Card>

            <Card className="h-32">
              <CardHeader>
                <CardTitle>Average Rating</CardTitle>
                <CardDescription>User rating of prediction accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{summaryAnalytics.averageRating.toFixed(2)}</div>
              </CardContent>
            </Card>
          </>
        ) : (
          <>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
            <LoadingCard/>
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {diseaseDistribution ? (
          <Card className="h-64">
            <CardHeader>
              <CardTitle>Disease Distribution</CardTitle>
              <CardDescription>Distribution of disease predictions</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={diseaseDistribution}
                    dataKey="predictionCount"
                    nameKey="disease"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {diseaseDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                    ))}
                  </Pie>
                  <Tooltip/>
                  <Legend/>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ) : (
          <LoadingChart/>
        )}

        {predictionTrends ? (
          <Card className="h-64">
            <CardHeader>
              <CardTitle>Prediction Trends (Last 30 Days)</CardTitle>
              <CardDescription>Number of predictions made per day</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={predictionTrends}>
                  <XAxis dataKey="date"/>
                  <YAxis/>
                  <Tooltip/>
                  <Line type="monotone" dataKey="predictionCount" stroke="#8884d8"/>
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ) : (
          <LoadingChart/>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {confidenceScoreDistribution ? (
          <Card className="h-64">
            <CardHeader>
              <CardTitle>Confidence Score Distribution</CardTitle>
              <CardDescription>Distribution of prediction confidence scores</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={confidenceScoreDistribution}>
                  <XAxis dataKey="confidenceLevel"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar dataKey="predictionCount" fill="#82ca9d"/>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ) : (
          <LoadingChart/>
        )}

        {ratingDistribution ? (
          <Card className="h-64">
            <CardHeader>
              <CardTitle>Rating Distribution</CardTitle>
              <CardDescription>Distribution of user feedback ratings</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ratingDistribution}>
                  <XAxis dataKey="rating"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar dataKey="feedbackCount" fill="#ffc658"/>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        ) : (
          <LoadingChart/>
        )}
      </div>

      {averageAccuracyRatingPerDisease ? (
        <Card>
          <CardHeader>
            <CardTitle>Average Accuracy Rating per Disease</CardTitle>
            <CardDescription>Accuracy ratings for each disease based on user feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={averageAccuracyRatingPerDisease}>
                <XAxis dataKey="disease"/>
                <YAxis/>
                <Tooltip/>
                <Bar dataKey="averageRating" fill="#a45de2"/>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      ) : (
        <LoadingChart/>
      )}
    </div>
  );
}
