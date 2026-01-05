export const withTenant = (req, res, next) => {
    req.tenantId = req.user.tenantId;
    next();
};
