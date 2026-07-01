import { useEffect, useState } from "react";

/**
 * Dashboard Sidebar Hook
 *
 * Handles:
 * - Desktop collapse state
 * - Mobile drawer state
 * - LocalStorage persistence
 */

const STORAGE_KEY = "loris-sidebar-collapsed";

export default function useSidebar() {

    const [collapsed, setCollapsed] = useState(() => {

        const savedState = localStorage.getItem(STORAGE_KEY);

        return savedState === "true";

    });

    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {

        localStorage.setItem(STORAGE_KEY, collapsed);

    }, [collapsed]);

    const toggleCollapse = () => {

        setCollapsed(previous => !previous);

    };

    const openMobileSidebar = () => {

        setMobileOpen(true);

    };

    const closeMobileSidebar = () => {

        setMobileOpen(false);

    };

    const toggleMobileSidebar = () => {

        setMobileOpen(previous => !previous);

    };

    return {

        collapsed,

        mobileOpen,

        toggleCollapse,

        openMobileSidebar,

        closeMobileSidebar,

        toggleMobileSidebar

    };

}
