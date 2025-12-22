import { useState, useEffect } from "react";

export default function StatCard({ title, value, loading }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 p-5 hover:shadow-md transition">
            {loading ? (
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2"></div>
                    <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                </div>
            ) : (
                <>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</p>
                    <p className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {value}
                    </p>
                </>
            )}
        </div>
    );
}
