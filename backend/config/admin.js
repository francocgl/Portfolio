module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26f6bcc4b854d83848403a647129af44'),
  },
});
