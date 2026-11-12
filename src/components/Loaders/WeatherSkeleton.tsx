import { Box, Skeleton } from "@mui/material";
import type { ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

const PAGE_BG = "#d5d6db";
const PANEL_BG = "#f6f6f8";

/** White rounded card used for the week tiles and highlight tiles */
const Card = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) => <Box sx={{ bgcolor: "#fff", ...sx }}>{children}</Box>;

/** Small helper so every text-like bar uses the same wave animation */
const Bar = ({
  w,
  h = 16,
  sx,
}: {
  w: number | string;
  h?: number;
  sx?: SxProps<Theme>;
}) => (
  <Skeleton
    variant="rounded"
    animation="wave"
    width={w}
    height={h}
    sx={{ borderRadius: "6px", ...sx }}
  />
);

const Circle = ({ size, sx }: { size: number; sx?: SxProps<Theme> }) => (
  <Skeleton
    variant="circular"
    animation="wave"
    width={size}
    height={size}
    sx={{ flexShrink: 0, ...sx }}
  />
);

/* ---------------------------------- Left ---------------------------------- */

const Sidebar = () => (
  <Box
    sx={{
      width: 286,
      flexShrink: 0,
      bgcolor: "#fff",
      p: "40px",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Search */}
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "10px", height: 24 }}
    >
      <Circle size={18} />
      <Bar w={140} h={18} />
    </Box>

    {/* Weather illustration */}
    <Box
      sx={{
        mt: "90px",
        height: 170,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        variant="circular"
        animation="wave"
        width={150}
        height={150}
        sx={{ mt: "10px" }}
      />
    </Box>

    {/* Temperature */}
    <Bar w={100} h={60} sx={{ mt: "43px", borderRadius: "10px" }} />

    {/* Day + time */}
    <Bar w={120} h={16} sx={{ mt: "33px" }} />

    {/* Divider */}
    <Skeleton
      variant="rectangular"
      animation={false}
      height={1}
      sx={{ mt: "26px", width: "100%" }}
    />

    {/* Condition rows */}
    <Box
      sx={{ mt: "21px", display: "flex", flexDirection: "column", gap: "12px" }}
    >
      {[110, 90].map((w, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            height: 20,
          }}
        >
          <Circle size={20} />
          <Bar w={w} h={12} />
        </Box>
      ))}
    </Box>

    {/* City image */}
    <Skeleton
      variant="rounded"
      animation="wave"
      width="100%"
      height={88}
      sx={{ mt: "auto", borderRadius: "16px" }}
    />
  </Box>
);

/* ---------------------------------- Right --------------------------------- */

const Header = () => (
  <Box
    sx={{
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "20px", mt: "16px" }}
    >
      <Bar w={45} h={16} />
      <Bar w={42} h={16} />
    </Box>
    <Box sx={{ display: "flex", gap: "19px" }}>
      <Circle size={32} />
      <Circle size={32} />
    </Box>
  </Box>
);

const WeekRow = () => (
  <Box
    sx={{
      mt: "60px",
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      gap: "8px",
    }}
  >
    {Array.from({ length: 7 }).map((_, i) => (
      <Card
        key={i}
        sx={{
          height: 135,
          borderRadius: "16px",
          p: "12px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Bar w={30} h={16} />
        <Circle size={40} />
        <Bar w={56} h={14} />
      </Card>
    ))}
  </Box>
);

const HighlightCard = ({ children }: { children: ReactNode }) => (
  <Card
    sx={{
      height: 178,
      borderRadius: "20px",
      p: "24px 20px 28px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    {children}
  </Card>
);

/** label / big value / footer text */
const StatCard = ({ valueW, footerW }: { valueW: number; footerW: number }) => (
  <HighlightCard>
    <Bar w={90} h={16} />
    <Bar w={valueW} h={48} sx={{ borderRadius: "10px" }} />
    <Bar w={footerW} h={16} />
  </HighlightCard>
);

const SunCard = () => (
  <HighlightCard>
    <Bar w={120} h={16} />
    <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {[0, 1].map((i) => (
        <Box
          key={i}
          sx={{ display: "flex", alignItems: "center", gap: "16px" }}
        >
          <Circle size={36} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <Bar w={64} h={16} />
            <Bar w={40} h={10} />
          </Box>
        </Box>
      ))}
    </Box>
  </HighlightCard>
);

const WindCard = () => (
  <HighlightCard>
    <Bar w={90} h={16} />
    <Bar w={165} h={48} sx={{ borderRadius: "10px" }} />
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Circle size={16} />
      <Bar w={44} h={16} />
    </Box>
  </HighlightCard>
);

const Highlights = () => (
  <>
    <Bar w={150} h={20} sx={{ mt: "65px" }} />
    <Box
      sx={{
        mt: "24px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      <StatCard valueW={70} footerW={90} />
      <StatCard valueW={50} footerW={70} />
      <SunCard />
      <StatCard valueW={80} footerW={130} />
      <StatCard valueW={110} footerW={80} />
      <WindCard />
    </Box>
  </>
);

/* ---------------------------------- Page ---------------------------------- */

export default function WeatherSkeleton() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "auto",
        bgcolor: PAGE_BG,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1150,
          height: 792,
          display: "flex",
          borderRadius: "40px",
          overflow: "hidden",
          bgcolor: PANEL_BG,
        }}
      >
        <Sidebar />
        <Box sx={{ flex: 1, minWidth: 0, p: "40px" }}>
          <Header />
          <WeekRow />
          <Highlights />
        </Box>
      </Box>
    </Box>
  );
}
