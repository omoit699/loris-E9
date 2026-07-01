import { useEffect, useState } from "react";

const STORAGE_KEY = "loris-sidebar";

export default function useSidebar() {

    const [collapsed, setCollapsed] = useState(() => {
        return localStorage.getItem(STORAGE_KEY) === "true";
    });

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, collapsed);
    }, [collapsed]);

    return {
        collapsed,
        mobileOpen,
        toggleCollapse: () => setCollapsed(prev => !prev),
        openMobileSidebar: () => setMobileOpen(true),
        closeMobileSidebar: () => setMobileOpen(false),
        toggleMobileSidebar: () => setMobileOpen(prev => !prev)
    };
}
