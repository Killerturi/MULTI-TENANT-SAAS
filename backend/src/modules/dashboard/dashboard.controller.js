import User from "../users/user.model.js";
import Project from "../projects/project.model.js";
import Tenant from "../tenants/tenant.model.js";

export const getDashboardStats = async (req, res) => {
    const tenantId = req.tenantId;

    const usersCount = await User.countDocuments({ tenantId });
    const projectsCount = await Project.countDocuments({ tenantId });

    const tenant = await Tenant.findById(tenantId);

    res.json({
        users: usersCount,
        projects: projectsCount,
        usage: `${tenant.usage}%`,
        plan: tenant.plan
    });
};
