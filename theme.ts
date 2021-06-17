import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const primaryColor = deepPurple.A400;

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        fontWeight: 700,
        boxShadow: 'none !important',
      },
      root: {
        color: 'rgba(0, 0, 0, 0.54)',
        textTransform: 'none',
      },
    },
    MuiCardActions: {
      root: {
        borderTop: '1px solid #e5e7eb',
      },
    },
    MuiCardHeader: {
      root: {
        padding: '16px 16px 0 16px',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 8,
        '&.Mui-selected': {
          color: '#fff',
          backgroundColor: primaryColor,
          '&:hover': {
            backgroundColor: primaryColor,
          },
          '& .MuiListItemIcon-root': {
            color: '#fff',
          },
        },
      },
    },
    MuiListItemIcon: {
      root: {
        minWidth: 'auto',
        marginRight: 16,
      },
    },
    MuiListItemText: {
      primary: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#e5e7eb',
      },
    },
  },
  palette: {
    divider: '#e5e7eb',
    primary: {
      main: primaryColor,
    },
  },
  shadows: [
    'none',
    '0 .125rem .25rem rgba(0,0,0,.075)',
    '0 .5rem 1rem rgba(0,0,0,.15)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
    '0 1rem 3rem rgba(0,0,0,.175)',
  ],
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(', '),
  },
});

export default theme;
