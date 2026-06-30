import {
    FiGrid,
    FiPackage,
    FiClipboard,
    FiShoppingBag,
    FiUsers,
    FiTruck,
    FiDollarSign,
    FiBarChart2,
    FiSettings
} from "react-icons/fi";

const adminMenu = [
    {
        label: "Dashboard",
        path: "/admin",
        icon: FiGrid
    },
    {
        label: "Products",
        path: "/admin/products",
        icon: FiPackage
    },
    {
        label: "Categories",
        path: "/admin/categories",
        icon: FiClipboard
    },
    {
        label: "Orders",
        path: "/admin/orders",
        icon: FiShoppingBag
    },
    {
        label: "Customers",
        path: "/admin/customers",
        icon: FiUsers
    },
    {
        label: "Suppliers",
        path: "/admin/suppliers",
        icon: FiTruck
    },
    {
        label: "Sales",
        path: "/admin/sales",
        icon: FiDollarSign
    },
    {
        label: "Analytics",
        path: "/admin/analytics",
        icon: FiBarChart2
    },
    {
        label: "Settings",
        path: "/admin/settings",
        icon: FiSettings
    }
];

export default adminMenu;