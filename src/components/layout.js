const Layout = ({ child }) => ({
  tag: 'section',
  style: {
    marginLeft: '40px',
    marginRight: '40px',
    marginTop: '60px',
    fontFamily: 'arial',
  },
  child,
});

export default Layout;
