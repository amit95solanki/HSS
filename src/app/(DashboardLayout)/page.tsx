"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
// components
import SalesOverview from "@/app/(DashboardLayout)/components/dashboard/SalesOverview";
import YearlyBreakup from "@/app/(DashboardLayout)/components/dashboard/YearlyBreakup";
import RecentTransactions from "@/app/(DashboardLayout)/components/dashboard/RecentTransactions";
import ProductPerformance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import Blog from "@/app/(DashboardLayout)/components/dashboard/Blog";
import MonthlyEarnings from "@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings";
import CarouselComponent from "./components/dashboard/CarouselComponent";
import CardSlider from "./components/dashboard/CardSlider";
import SocialMediaBanner from "./components/dashboard/SocialMediaBanner";
import Banner from "./components/dashboard/Banner";
import Footer from "./components/dashboard/Footer";
import AboutSection from "./components/dashboard/AboutSection";

const Dashboard = () => {
  return (
    <PageContainer
      title="Hindustan Survillance System"
      description="this is Dashboard"
    >
      <Box>
        <CarouselComponent />
        <AboutSection />
        <Banner />
        <CardSlider />
        <SocialMediaBanner />
        <Footer />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
