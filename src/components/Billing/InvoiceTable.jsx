import React from "react";

export default function InvoiceTable({ invoices }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Invoice History</h2>
            <table className="w-full table-auto text-left border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-gray-600">Date</th>
                        <th className="px-4 py-2 text-gray-600">Amount</th>
                        <th className="px-4 py-2 text-gray-600">Status</th>
                        <th className="px-4 py-2 text-gray-600">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice) => (
                        <tr key={invoice.id} className="border-b hover:bg-gray-50 transition">
                            <td className="px-4 py-2">{invoice.date}</td>
                            <td className="px-4 py-2 font-medium">{invoice.amount}</td>
                            <td className="px-4 py-2">
                                <span
                                    className={`px-2 py-1 rounded-full text-white text-sm ${invoice.status === "Paid"
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                        }`}
                                >
                                    {invoice.status}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <button className="text-indigo-500 hover:underline font-medium">
                                    Download
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
