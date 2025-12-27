import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Download } from "lucide-react";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ExportActions({ data, disabled }) {
    const [open, setOpen] = useState(false);
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    const btnRef = useRef(null);
    const dropdownRef = useRef(null);

    // ✅ Correct outside click handling
    useEffect(() => {
        const handler = (e) => {
            if (
                btnRef.current?.contains(e.target) ||
                dropdownRef.current?.contains(e.target)
            ) {
                return; // click inside → do nothing
            }
            setOpen(false);
        };

        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    if (!data) return null;

    const toggle = () => {
        if (btnRef.current) {
            const rect = btnRef.current.getBoundingClientRect();
            const dropUp = rect.bottom + 140 > window.innerHeight;

            setCoords({
                left: rect.right - 176,
                top: dropUp ? rect.top - 120 : rect.bottom + 8,
            });
        }
        setOpen((v) => !v);
    };

    const exportCSV = () => {
        const rows = data.projects
            .map((p) => `${p.name},${p.value}`)
            .join("\n");

        const csv = `Status,Count\n${rows}`;
        saveAs(new Blob([csv], { type: "text/csv;charset=utf-8;" }),
            "analytics-report.csv"
        );

        setOpen(false);
    };

    const exportPDF = () => {
        const doc = new jsPDF();
        doc.text("Analytics Report", 14, 14);

        autoTable(doc, {
            startY: 20,
            head: [["Status", "Count"]],
            body: data.projects.map((p) => [p.name, p.value]),
        });

        doc.save("analytics-report.pdf");
        setOpen(false);
    };

    return (
        <>
            {/* Button */}
            <button
                ref={btnRef}
                onClick={toggle}
                disabled={disabled}
                className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm bg-white hover:bg-gray-100 disabled:opacity-50"
            >
                <Download size={16} />
                Export
            </button>

            {/* Dropdown (PORTAL) */}
            {open &&
                createPortal(
                    <div
                        ref={dropdownRef}
                        style={{
                            position: "fixed",
                            top: coords.top,
                            left: coords.left,
                            width: 176,
                            zIndex: 9999,
                        }}
                        className="rounded-lg border bg-white shadow-lg"
                    >
                        <button
                            onClick={exportCSV}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                        >
                            Export CSV
                        </button>
                        <button
                            onClick={exportPDF}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                        >
                            Export PDF
                        </button>
                    </div>,
                    document.body
                )}
        </>
    );
}
