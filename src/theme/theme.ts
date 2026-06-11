import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",

  palette: {
    primary: {
      main: "#2563eb",
      light: "#60a5fa",
      dark: "#1d4ed8",
    },

    secondary: {
      main: "#64748b",
    },

    success: {
      main: "#16a34a",
    },

    warning: {
      main: "#f59e0b",
    },

    error: {
      main: "#dc2626",
    },

    background: {
      default: "#f8fafc",
      paper: "#ffffff",
    },

    text: {
      primary: "#1e293b",
      secondary: "#64748b",
    },

    divider: "#e2e8f0",
  },

  typography: {
    fontFamily: "Vazirmatn, sans-serif",

    h1: {
      fontSize: "2.25rem",
      fontWeight: 700,
    },

    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },

    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },

    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },

    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },

    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },

    subtitle1: {
      fontSize: "0.95rem",
      fontWeight: 500,
    },

    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },

    body1: {
      fontSize: "0.95rem",
      lineHeight: 1.8,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.7,
    },

    button: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f8fafc",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#1e293b",
          boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
          borderBottom: "1px solid #e2e8f0",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        },
      },
    },

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 600,
          paddingInline: "16px",
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderLeft: "1px solid #e2e8f0",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "0.8rem",
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          marginInline: 8,
          color: "#94a3b8",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #e2e8f0",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 48,

          fontSize: "0.95rem",

          fontWeight: 600,

          color: "#64748b",

          textTransform: "none",

          transition: "all 0.2s ease",

          "&:hover": {
            color: "#2563eb",
          },
        },
      },
    },
  },
});
