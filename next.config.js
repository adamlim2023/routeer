module.exports = {
  env: {
    API_BASE_URI: "https://api.staging.routeer.com",
    GOOGLE_API_KEY : 'AIzaSyCnG7SpnWR-RXMa-1kXKIcEtgAtZOYzDXI'
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/bulk",
        permanent: false,
      },
    ];
  },
};
