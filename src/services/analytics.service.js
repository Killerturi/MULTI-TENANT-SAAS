export function fetchAnalyticsData(role, range) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                kpi: {
                    Users: role === "OWNER" ? 42 : 38,
                    Projects: 128,
                    Usage: "86%",
                    Plan: role === "OWNER" ? "PRO" : "—",
                },
                usage: [
                    { day: "Mon", users: 30 },
                    { day: "Tue", users: 34 },
                    { day: "Wed", users: 40 },
                    { day: "Thu", users: 38 },
                    { day: "Fri", users: 42 },
                ],
                projects: [
                    { name: "On Track", value: 82 },
                    { name: "At Risk", value: 31 },
                    { name: "Delayed", value: 15 },
                ],
            });
        }, 800);
    });
}
