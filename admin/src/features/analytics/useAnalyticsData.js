import { useEffect, useState } from "react";
import { fetchAnalyticsData } from "../../services/analytics.service";

export default function useAnalyticsData(role, range) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchAnalyticsData(role, range).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [role, range]);

    return { data, loading };
}
