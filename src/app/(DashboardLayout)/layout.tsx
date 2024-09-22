"use client";

import { styled, Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import NavigationBar from "./components/dashboard/NavigationBar";
import apiservice from "../../service/apiservice";
import { useDataContext } from "../../context/AuthContext";
// Styled Components
const MainWrapper = styled("div")({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
});

const PageWrapper = styled("div")({
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
});

// Component Props
interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const { user, setUser, userInfo, setUserInfo } = useDataContext();

  // console.log("userInfo", userInfo);

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const handleGetUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        if (!accessToken) {
          console.log("No access token found");
          setUser(false); // Set user to false if no token
          return;
        }

        const response = await apiservice.verifyUser({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const userData = response.data;
        setUserInfo(userData?.userProfile?.user);
        setUser(userData.success); // Update state with user success status
      } catch (error: any) {
        if (error.response) {
          console.log("Error Data:", error.response.data);
          console.log("Error Status:", error.response.status);
          console.log("Error Headers:", error.response.headers);
        } else if (error.request) {
          console.log("No response was received:", error.request);
        } else {
          console.log("Error message:", error.message);
        }
        setUser(false); // Set user to false on error
      }
    };

    handleGetUserData();
  }, []);

  return (
    <>
      {user ? (
        <MainWrapper className="mainwrapper">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
            user={Boolean(user)} // Ensure user is a boolean when passed to Sidebar
          />
          <PageWrapper className="page-wrapper">
            <Header toggleMobileSidebar={() => setMobileSidebarOpen(true)} />

            <Container sx={{ paddingTop: "20px", maxWidth: "1200px" }}>
              <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
            </Container>
          </PageWrapper>
        </MainWrapper>
      ) : (
        <MainWrapper className="mainwrapper">
          <PageWrapper className="page-wrapper">
            <NavigationBar />
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          </PageWrapper>
        </MainWrapper>
      )}
    </>
  );
};

export default RootLayout;
