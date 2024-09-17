"use client";

import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";

// Styled Components
const MainWrapper = styled("div")({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
});

const PageWrapper = styled("div")({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  backgroundColor: "transparent",
});

// Component Props
interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const user: boolean = false;

  return (
    <>
      {user ? (
        <MainWrapper className="mainwrapper">
          {/* Sidebar */}
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
            user={user}
          />

          {/* Main Wrapper */}
          <PageWrapper className="page-wrapper">
            {/* Header */}
            <Header
              toggleMobileSidebar={() => setMobileSidebarOpen(true)}
              user={user}
            />

            {/* Page Content */}
            <Container
              sx={{
                paddingTop: "20px",
                maxWidth: "1200px",
              }}
            >
              {/* Page Route */}
              <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
            </Container>
          </PageWrapper>
        </MainWrapper>
      ) : (
        <MainWrapper className="mainwrapper">
          {/* Sidebar */}
          {/* <Sidebar
            isSidebarOpen={isSidebarOpen}
            isMobileSidebarOpen={isMobileSidebarOpen}
            onSidebarClose={() => setMobileSidebarOpen(false)}
            user={user}
          /> */}

          {/* Main Wrapper */}
          <PageWrapper className="page-wrapper">
            {/* Header */}
            <Header
              toggleMobileSidebar={() => setMobileSidebarOpen(true)}
              user={user}
            />

            {/* Page Content */}

            {/* Page Route */}
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>{children}</Box>
          </PageWrapper>
        </MainWrapper>
      )}
    </>
  );
};

export default RootLayout;
